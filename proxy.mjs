import { proxyRequests } from '@discordjs/proxy';
import { REST } from '@discordjs/rest';
import { createServer } from 'node:https';
import process from 'node:process';

// Handle ratelimits at the proxy level
// This deviates from proxy-container, which passes the burden of ratelimits on the client
// BUT that wont handle the 50/s or w/e global limit your bot has
const api = new REST();
const server = createServer(proxyRequests(api));

const port = Number.parseInt(process.env.PORT ?? '8080', 10);
server.listen(port, () => console.log(`Listening on port ${port}`));
