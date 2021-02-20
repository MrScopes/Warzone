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
}