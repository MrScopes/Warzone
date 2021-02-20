import { Client } from '.';
const client = new Client();

(async () => {
    const player = await client.getPlayer('MrScopes');
    console.log(player);
})();