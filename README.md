# warzone
WarzoneMC Api Wrapper. Completely promise based.\
`Note: The WarzoneMC API is fairly slow. It is not the wrapper.`\
**This is in no way affiliated with WarzoneMC.**\
Contact me on Discord `@MrScopes#5548` with any questions, or make an issue. 

<br>

# Table of Contents
- [Install](#install)
- [Example Usage](#example-usage)
- [Documentation](#documentation)

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

<br>

## Client

`.getPlayer(input, options)` -> [Promise\<Player>](#player)
| Option | Description | Default |
| ------ | ----------- | ------- |
| simple | Should it not include deaths and matches? | true
| byUUID | Should it get by UUID instead of username? | false
```ts
.getPlayer('MrScopes')
.getPlayer('MrScopes', { simple: false })
.getPlayer('649ddc08-5406-4d15-83ab-c00974a7fee7', { byUUID: true, simple: false })
```


<br>

## Player
**.user**\
`{
    _id: string;
    name: string;
    nameLower: string;
    uuid: string;
    initialJoinDate: string;
    lastOnlineDate: string;
    __v: number;
    kills: number;
    deaths: number;
    wool_destroys: number;
    losses: number;
    wins: number;
    activeTag: string;
    punishments: string[];
    tags: string[];
    ranks: string[];
    level: number;
    levelRaw: number;
    xp: number;
}`

**.deaths**\
`{
    killerLoaded: User;
    playerLoaded: User;
    _id: string;
    player: string;
    killer: string;
    playerItem: string;
    killerItem: string;
    map: string;
    date: number;
    match: string;
    __v: number;
}[]`

**.matches**\
`{
    _id: string;
    initializedDate: number;
    finished: boolean;
    map: string;
    __v: number;
    finishedDate: number;
    startedDate: number;
    winningTeam: string;
    teamMappings: [{
        _id: string;
        player: string;
        team: string;
    }];
    losers: string[];
    winners: string[];
    deaths: [];
    chat: [];
}[]`