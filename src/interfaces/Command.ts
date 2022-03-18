import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export interface CommandInterface {
  name: string,
  description: string,
  data: SlashCommandBuilder,
  execute: (interaction: CommandInteraction) => Promise<void>
}