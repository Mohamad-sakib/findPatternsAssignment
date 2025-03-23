const listener = Deno.listen({ port: 8000 });

const decode = () => "ADD 1 1";

const handelRequest = () => 3;

const handelConnection = async (connection) => {
  for await (const chunk of connection.readable) {
    const request = decode(chunk);
    console.log("request:", request);
    const response = handelRequest(request);
    console.log("response:", response);
    connection.write(new TextEncoder().encode(response));
  }
};

for await (const connection of listener) {
  handelConnection(connection);
}
