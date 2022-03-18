import { ButtonInteraction, Interaction, Message, MessageActionRow, MessageButton, CommandInteraction } from "discord.js";
import { myClient } from "./interfaces/Client";
const fs = require("fs")
let user = [2, 2];

const {map, token} = require('../config.json');

require('./mongo').run();
import { summon } from './utils';
const client: myClient = new myClient();

const commandFiles = fs.readdirSync('./Build/commands').filter((file : string) => file.endsWith('.js'));

for (const file of commandFiles) {
	const { command } = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}


client.on("ready", () => console.log("Ready"))

client.on("interactionCreate", async (interaction : Interaction) => {
    if(interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        console.log(command)
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
    if(interaction.isButton()) {
        if(interaction.customId.startsWith("map")) {
            const args = interaction.customId.split("_");
            const _x = Number(args[1]);
            const _y = Number(args[2]);
            move(_x, _y, interaction)
        }
    }
})
function move(x: number, y: number, interaction: ButtonInteraction) {
    if(map[x][y] !== 1) {
        user = [x, y];
        summon(x, y, interaction, map, user)
    } else {
        interaction.reply({content: "Te has chocado inutil", ephemeral: true})
    }
}

client.login(token)