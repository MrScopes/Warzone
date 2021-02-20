import { Utilities } from '../client/Utilities';
import { Death, Match, Rank, User } from '../types/Types';

export class Player {
    user: User;
    deaths: Death[];
    matches: Match[];

    constructor(data) {
        this.user = data.user;
        this.deaths = data.deaths;
        this.matches = data.matches;
    }

    /**
     * Get this player's ranks.
     */
    async getRanks(): Promise<Rank[]> {
        return await Utilities.APIRequest(`/mc/player/${this.user.name}/ranks`);
    }
}