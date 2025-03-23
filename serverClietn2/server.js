const listener = Deno.listen({ port: 8000 });

const decode = (chunk, decoder) => {
  const request = decoder.decode(chunk);
  return JSON.parse(request);
};

const isValidCommand = (cmd) => {
  const commands = new Set(["ADD", "SUB"]);
  return commands.has(cmd);
};

const add = (args) => args[0] + args[1];
// const sub = (args) => args[0] + args[1];

const evaluate = (minNumberOfArgs, maxNumberOfArgs, fn) => {
  return (args) => {
    if (args.length === minNumberOfArgs || args.length >= maxNumberOfArgs) {
      return fn(args);
    }
    return { error: "invaid args" };
  };
};

const executeCommand = (cmd) => {
  if (!isValidCommand(cmd)) {
    return { error: "invalidCommand" };
  }

  const commands = {
    ADD: evaluate(2, 2, add),
  };

  return commands[cmd];
};

const handelRequest = ({ cmd, args }) => {
  return executeCommand(cmd)(args);
};

const sendResponse = async (response, connection) => {
  const formatedRespose = JSON.stringify(response);
  await connection.write(new TextEncoder().encode(formatedRespose));
};

const handelConnection = async (connection) => {
  const decoder = new TextDecoder();
  for await (const chunk of connection.readable) {
    const request = decode(chunk, decoder);
    console.log("request:", request);
    const response = handelRequest(request);
    console.log("response:", response);
    sendResponse(response, connection);
  }
};

for await (const connection of listener) {
  handelConnection(connection);
}
