"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const builders_1 = require("@discordjs/builders");
let user = [2, 2];
const { map } = require('../../config.json');
const utils_1 = require("../utils");
class send {
    name = "send";
    description = "Send the game";
    data = new builders_1.SlashCommandBuilder()
        .setName(this.name)
        .setDescription(this.description);
    execute = async (interaction) => {
        (0, utils_1.summon)(user[0], user[1], interaction, map, user);
    };
}
exports.command = new send();
