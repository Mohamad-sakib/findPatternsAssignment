import _ from "lodash";

const decode = (chunk) => {
  const decoder = new TextDecoder();
  const request = decoder.decode(chunk);
  return JSON.parse(request);
};

const isValidCommand = (cmd) => {
  const commands = new Set(["ADD", "SUB", "MUL", "DIV", "RAND", "ABS"]);
  return commands.has(cmd);
};

const add = (args) => args[0] + args[1];
const sub = (args) => args[0] - args[1];
const mul = (args) => args[0] * args[1];
const div = (args) => args[0] / args[1];
const abs = ([arg]) => Math.abs(arg);
const rand = (args) => {
  if (args.length === 0) return Math.random();
  return _.random(args[0], args[1]);
};
const inValidCommand = () => {
  return { error: "invalidCommand" };
};

const evaluate = (minNumberOfArgs, maxNumberOfArgs, fn) => {
  return (args) => {
    if (args.length === minNumberOfArgs || args.length >= maxNumberOfArgs) {
      return { result: fn(args) };
    }
    return { error: "invalid args" };
  };
};

const executeCommand = (cmd) => {
  if (!isValidCommand(cmd)) {
    return inValidCommand;
  }

  const commands = {
    ADD: evaluate(2, 2, add),
    SUB: evaluate(2, 2, sub),
    MUL: evaluate(2, 2, mul),
    DIV: evaluate(2, 2, div),
    ABS: evaluate(1, 2, abs),
    RAND: evaluate(0, 2, rand),
  };

  return commands[cmd];
};

const handelRequest = ({ cmd, args }) => {
  console.log(cmd, args);
  console.log(executeCommand(cmd));
  return executeCommand(cmd)(args);
};

const sendResponse = async (response, connection) => {
  const formatedRespose = JSON.stringify(response);
  await connection.write(new TextEncoder().encode(formatedRespose));
};

const handelConnection = async (connection) => {
  // for await (const chunk of connection.readable) {
  //   const request = decode(chunk);
  //   console.log("request:", request);
  //   const response = handelRequest(request);
  //   console.log("response:", response);
  //   sendResponse(response, connection);
  // }

  connection.readable
    .pipeThrough(decodeRequest)
    .pipeThrough(handelRequest)
    .pipeThrough(formateResponse)
    .pipeThrough(encodeRequest)
    .pipeTo(connection.writable);
};

const startServer = async () => {
  const listener = Deno.listen({ port: 8000 });

  for await (const connection of listener) {
    handelConnection(connection);
  }
};

startServer();

console.log("Server Listening at Port Number: 8000....!");
