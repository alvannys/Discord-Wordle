const TOKEN = "TOKEN"
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientID = "x";
const guildID = "x";

const commands = [

	new SlashCommandBuilder().setName('wordle').setDescription('Start a wordle.'),

].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

// this is specifically for one guild 
rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
