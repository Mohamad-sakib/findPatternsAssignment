const listener = Deno.listen({ port: 8000 });
const conn = await listener.accept();
const request = await conn.readable.getReader().read();
await conn.write(new TextEncoder().encode(3));
