import { SlashCommandBuilder } from '@discordjs/builders';

import { CommandInteraction, ButtonInteraction, MessageActionRow, MessageButton } from 'discord.js';
import { CommandInterface } from '../interfaces/Command';

let user = [2, 2]
const { map } = require('../../config.json');
import { summon } from '../utils';

class send implements CommandInterface {
    name = "send";
    description = "Send the game";
    data = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
    execute = async (interaction: CommandInteraction) => {
      summon(user[0], user[1], interaction, map, user)
    }
  }
export const command = new send()