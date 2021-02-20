import { Player } from "../structures/Player";

export interface OptionsGetPlayer {
    /** If it should get the Player based on their UUID */
    byUUID?: boolean;
    /** This Drastically increases the response, inserting 'deaths' and 'matches' to the response if false. */
    simple?: boolean;
}

export interface User {
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
}

export interface Map {
    id: string;
    name: string;
    nameLower: string;
    version: string;
    gametype: string;
    __v: number;
    teams: string[];
    images: string[];
    authors: [{
        _id: string;
        username: string;
        uuid: string;
    }];
}

export interface Game {
    match: Match;
    loadedMap: Map;
    timeElapsed: string;
    matchSize: number;
}

export interface FetchedMatch {
    match: Match;
    playersLoaded: Player[];
    winnersLoaded: Player[];
    losersLoaded: Player[];
    playerStats: {
        _id: string;
        name: string;
        uuid: string;
        kills: number;
        deaths: number;
        kdr: string;
    },
    deathsLoaded: Death[];
    mapLoaded: Map;
    teamsLoaded: [];
    timeElapsed: string;
}

export interface Match {
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
}

export interface Death {
    _id: string;
    killerLoaded: User;
    playerLoaded: User;
    player: string;
    killer: string;
    playerItem: string;
    killerItem: string;
    map: string;
    date: number;
    match: string;
    __v: number;
}

export type Leaderboard =
| 'kills'
| 'xp'
| 'wins'
| 'losses';

export interface Punishment {
    _id: string;
    punished: string;
    ip_ban: boolean;
    type: string;
    issued: number;
    expires: number;
    reason: string;
    __v: number;
    active: boolean;
    punishedLoaded: User;
}

export interface Rank {
    _id: string;
    name: string;
    priority: number;
    prefix: string;
    staff: boolean;
    __v: number;
    default: boolean;
    display: string;
    permissions: string[];
}