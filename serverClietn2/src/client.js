export const parse = (msg) => {
  const [cmd, ...args] = msg.split(/\s+/);
  return { cmd, args: args.map(Number) };
};

const decode = (chunk) => {
  const decoder = new TextDecoder();
  const request = decoder.decode(chunk);
  return JSON.parse(request);
};

const makeRequest = async (connection) => {
  const encoder = new TextEncoder();
  const request = prompt("");
  const formatedRequest = JSON.stringify(parse(request));
  await connection.write(encoder.encode(formatedRequest));
};

const handelResponse = async (connection) => {
  const reader = connection.readable.getReader();
  const response = await reader.read();
  const decodedResponse = decode(response.value);
  const result = decodedResponse.result
    ? decodedResponse.result
    : decodedResponse.error;
  console.log(result);
  reader.releaseLock();
};
const main = async () => {
  const connection = await Deno.connect({ port: 8000 });
  while (true) {
    await makeRequest(connection);
    await handelResponse(connection);
  }
};

main();
console.log("connected to port : 8000");
