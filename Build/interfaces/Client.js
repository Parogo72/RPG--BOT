"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myClient = void 0;
const discord_js_1 = require("discord.js");
class myClient extends discord_js_1.Client {
    commands = new discord_js_1.Collection();
    constructor() {
        super({
            intents: ["GUILDS", "GUILD_MESSAGES"],
            partials: ['MESSAGE', 'GUILD_MEMBER', 'CHANNEL', 'REACTION', 'USER'],
        });
    }
}
exports.myClient = myClient;
