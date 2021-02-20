import { Player, OptionsGetPlayer, Death, Game, Leaderboard, User, Punishment, Rank } from '..';
import { FetchedMatch } from '../types/Types';
import { Utilities } from './Utilities';

export class Client {

	/**
	 * Get a player, by username or uuid.
	 * @param input Username or UUID (if UUID, enable options.byUUID)
	 * @param options
	 * @example
	 * .getPlayer('MrScopes')
	 * .getPlayer('MrScopes', { simple: false })
	 * .getPlayer('649ddc08-5406-4d15-83ab-c00974a7fee7', { byUUID: true, simple: false })
	 */ 
	async getPlayer(input: string, options: OptionsGetPlayer = { simple: true, byUUID: false }): Promise<Player> {
		/* this works but setting the return type to Player | Player[] removed auto completions ;/
		if (Array.isArray(input)) {
			return Promise.all(input.map(player => this.getPlayer(player)));
		} else {
			return new Player(await Utilities.APIRequest(`/mc/player/${input}?simple=${simple}` + (byUUID ? '&byUUID=true' : '')));
		}
		*/

		// this workaround was annoying to make, pls fix api
		const url = `/mc/player/${input}${(!('simple' in options) || options?.simple) ? '?simple=true' : ''}${(!('simple' in options) || options?.simple) ? '' : '?byUUID=true'}`
		const data = await Utilities.APIRequest(url);
		return new Player(data);
	}

	/**
	 * Return the last 4 ingame deaths.
	 */
	async getLatestDeaths(): Promise<Death[]> {
		return await Utilities.APIRequest('/mc/death/latest');
	}

	/**
	 * Get a specific Leaderboard.
	 * @param leaderboard The Leaderboard type.
	 * @param limit Amount of players. Max is 25.
	 * @example
	 * .getLeaderboard('kills', 10)
	 */
	async getLeaderboard(leaderboard: Leaderboard, limit = 25): Promise<User[]> {
		return await Utilities.APIRequest(('/mc/leaderboard/' + leaderboard) + ('?limit=' + limit));
	}

	/**
	 * Get a player's last 5 matches. Supply no argument for the most recent 4 matches.
	 * @param username
	 */
	async getLatestMatches(username?: string): Promise<Game[]> {
		return await Utilities.APIRequest(`/mc/match/latest${username ? ('/' + username) : ''}`);
	}

	/**
	 * Get a specific match.
	 * @param id 
	 */
	async getMatch(id: string): Promise<FetchedMatch> {
		return await Utilities.APIRequest('/mc/match/' + id);
	}

	/**
	 * Fetch recent punishments.
	 * @param limit Amount of punishments. Max is 10.
	 */
	async getLatestPunishments(limit = 10): Promise<Punishment[]> {
		return await Utilities.APIRequest('/mc/punishment/latest' + ('?limit=' + limit));
	}

	/**
	 * Get the server's ranks.
	 */
	async getRanks(): Promise<Rank[]> {
		return await Utilities.APIRequest('/mc/ranks');
	}
}