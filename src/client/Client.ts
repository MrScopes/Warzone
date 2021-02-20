import { Player, OptionsGetPlayer } from '..';
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
}