import { Death, Match, User } from '../types/Types';

export class Player {
    user: User;
    deaths: Death[];
    matches: Match[];

    constructor(data) {
        this.user = data.user;
        this.deaths = data.deaths;
        this.matches = data.matches;
    }
}