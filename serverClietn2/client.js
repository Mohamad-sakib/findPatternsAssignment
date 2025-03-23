const conn = await Deno.connect({ port: 8000 });
await conn.write(new TextEncoder().encode("ADD 1 1"));
const response = await conn.readable.getReader().read();
Deno.stdout.write(response.value);
