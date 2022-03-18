import { Client, Collection } from "discord.js";
import { CommandInterface } from "./Command";

export class myClient extends Client{
    public commands: Collection<string, CommandInterface> = new Collection();
    public constructor() {
		super({
			intents: ["GUILDS", "GUILD_MESSAGES"],
			partials: ['MESSAGE', 'GUILD_MEMBER', 'CHANNEL', 'REACTION', 'USER'],
		});
	}
}