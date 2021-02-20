# warzone
WarzoneMC Api Wrapper. Completely promise based. Only supports public get methods for now.\
`Note: The WarzoneMC API is fairly slow. It is not the wrapper.`\
**This is in no way affiliated with WarzoneMC.**\
Contact me on Discord `@MrScopes#5548` with any questions, or make an issue. 

<br>

# Table of Contents
- [Install](#install)
- [Example Usage](#example-usage)
- [Documentation](#documentation)
- [Tests](#tests)

<br>

# Install
- Developed on `Node v14.15.5`, I'm sure it works with other versions though.
```c
npm i warzone
```
or with yarn
```
yarn add warzone
```

<br>

# Example Usage
```ts
import { Client } from 'warzone';
const client = new Client();

client.getPlayer('MrScopes').then(console.log);
```

<br>

# Documentation
I'll generate docs tomorrow, but you can see the stuff in the code

# Tests
check out src/test for the test source code, here's the following being ran:
```ts
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
```
...
```
C:\Users\Drewm\Desktop\projects\warzone>ts-node src/test


        MrScopes (vip) has 1649 kills.
        Residents is the #1 killer, with 25178 kills.
        XxEternalAngelxX was killed by Eraaaks using IRON_SWORD.
        The current match is on Timeless.
        Match 6005fe237c57a1a36a0b11dc started at Mon Jan 18 2021 16:31:37 GMT-0500 (Eastern Standard Time) on Electri City.
        Default rank has 2 different permissions.
        The most recent punishment was Naruto_HD being punished for Fly.


All Tests Successfully ran in 6076ms.
```