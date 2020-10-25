import { parse } from "https://deno.land/std/flags/mod.ts";
import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx) => {
    ctx.response.body = 'Hello World!';
});

app.addEventListener('listen', ({ hostname, port, secure }) => {
    const addr = `${secure ? 'https' : 'http'}://${hostname ?? 'localhost'}:${port}`;
    console.log(`Listening on: ${addr}`);
});

const flags = parse(Deno.args);
const port = parseInt(flags.port || '8000');
await app.listen({ port: port });
