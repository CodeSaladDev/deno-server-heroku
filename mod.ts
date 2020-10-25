import { parse } from 'https://deno.land/std@0.74.0/flags/mod.ts';
import { serve } from 'https://deno.land/std@0.74.0/http/server.ts';

const flags = parse(Deno.args);
const port = flags.port ?? 8000;
const s = serve({ port });

console.log(`Listening on :${port}`);

// Respond to each request with a "Hello World!" HTML page
for await (const req of s) {
    req.respond({
        body: '<h1>Hello World!</h1>' +
            '<p>&star; This is a Deno server &star;</p>' +
            '<img src="https://deno.land/logo.svg" width="150" height="150">',
        headers: new Headers({ 'Content-Type': 'text/html' }),
    });
}
