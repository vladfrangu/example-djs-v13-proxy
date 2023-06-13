import { Client } from 'discord.js';

const client = new Client({
	http: {
		api: 'http://localhost:8080/api',
	},
	intents: 0
});

client.once('ready', () => {
	console.log('Ready!');
})

await client.login('');
