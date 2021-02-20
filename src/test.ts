import { Client } from '.';
const client = new Client();

(async () => {
    const time = Date.now();

    const player = await client.getPlayer('MrScopes');
    const killsLb = await client.getLeaderboard('kills', 3);
    const deaths = await client.getLatestDeaths();
    const latestMatch = await client.getLatestMatches();
    const match = await client.getMatch('6005fe237c57a1a36a0b11dc');
    const ranks = await client.getRanks();
    const punishments = await client.getLatestPunishments();

    console.log(`

        ${player.user.name} (${(await player.getRanks())[0].name}) has ${player.user.kills} kills.
        ${killsLb[0].name} is the #1 killer, with ${killsLb[0].kills} kills.
        ${deaths[0].playerLoaded.name} was killed by ${deaths[0].killerLoaded.name} using ${deaths[0].killerItem}.
        The current match is on ${latestMatch[0].loadedMap.name}.
        Match 6005fe237c57a1a36a0b11dc started at ${new Date(match.match.startedDate)} on ${match.mapLoaded.name}.
        Default rank has ${ranks[0].permissions.length} different permissions.
        The most recent punishment was ${punishments[0].punishedLoaded.name} being punished for ${punishments[0].reason}.

    `);

    console.log(`All Tests Successfully ran in ${Date.now() - time}ms.`);
})();