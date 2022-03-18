

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId } = require('../config.json');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./Build/commands').filter((file : string) => file.endsWith('.js'));

for (const file of commandFiles) {
	const { command } = require(`./commands/${file}`);
	console.log(command)
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken("NzQ5NTg1ODIxNjU2NDE2MzQ4.X0uIMg.0LtDOSyxDTOFVlSyPHtdfjhAhA0");

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, "797516005395267645"),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();