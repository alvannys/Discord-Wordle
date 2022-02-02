const TOKEN = "TOKEN";

const checkw = require('check-word');
const cw = checkw('en');
const letters = require('./letter');
const random = require('random');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });

const wordList = fs.readFileSync("./wordtest.txt").toString('utf-8');
const words = wordList.split('\n');

const genWord = () => {
    const wordFinal = words[random.int(0, words.length)].toUpperCase();
    return wordFinal
}

let word = genWord()

let previousWord;
let guesses = 0;
let letterSpot = 1;

const keys1 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('a')
        .setLabel(`A`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('b')
        .setLabel(`B`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('c')
        .setLabel(`C`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('d')
        .setLabel(`D`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('e')
        .setLabel(`E`)
        .setStyle('SECONDARY'),
);
const keys2 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('f')
        .setLabel(`F`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('g')
        .setLabel(`G`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('h')
        .setLabel(`H`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('i')
        .setLabel(`I`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('j')
        .setLabel(`J`)
        .setStyle('SECONDARY'),
);
const keys3 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('k')
        .setLabel(`K`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('l')
        .setLabel(`L`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('m')
        .setLabel(`M`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('n')
        .setLabel(`N`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('o')
        .setLabel(`O`)
        .setStyle('SECONDARY'),
);
const keys4 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('p')
        .setLabel(`P`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('q')
        .setLabel(`Q`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('r')
        .setLabel(`R`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('s')
        .setLabel(`S`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('t')
        .setLabel(`T`)
        .setStyle('SECONDARY'),
);
const keys5 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('blank1')
        .setLabel(`\u200b`)
        .setStyle('SECONDARY')
        .setDisabled(true),
    new MessageButton()
        .setCustomId('enter')
        .setLabel(`✓`)
        .setStyle('SUCCESS'),
    new MessageButton()
        .setCustomId('pg2')
        .setLabel(`→`)
        .setStyle('PRIMARY'),
    new MessageButton()
        .setCustomId('del')
        .setLabel(`DEL`)
        .setStyle('DANGER'),
        new MessageButton()
        .setCustomId('blank2')
        .setLabel(`\u200b`)
        .setStyle('SECONDARY')
        .setDisabled(true),
);

const keysp2 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('u')
        .setLabel(`U`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('v')
        .setLabel(`V`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('w')
        .setLabel(`W`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('x')
        .setLabel(`X`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('y')
        .setLabel(`Y`)
        .setStyle('SECONDARY'),
);
const keysp2row2 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setCustomId('z')
        .setLabel(`Z`)
        .setStyle('SECONDARY'),
    new MessageButton()
        .setCustomId('stop')
        .setEmoji('🛑')
        .setStyle('DANGER'),
    new MessageButton()
        .setCustomId('enterp2')
        .setLabel(`✓`)
        .setStyle('SUCCESS'),
    new MessageButton()
        .setCustomId('pg1')
        .setLabel(`←`)
        .setStyle('PRIMARY'),
    new MessageButton()
        .setCustomId('delp2')
        .setLabel(`DEL`)
        .setStyle('DANGER'),
);

const { box } = letters;

let b = [
    [ [box], [box], [box], [box], [box] ], 
    [ [box], [box], [box], [box], [box] ], 
    [ [box], [box], [box], [box], [box] ], 
    [ [box], [box], [box], [box], [box] ], 
    [ [box], [box], [box], [box], [box] ], 
    [ [box], [box], [box], [box], [box] ], 
]

let boardEmbed = new MessageEmbed()
    .setColor('#2f3136')
    .setDescription(`${b[0][0]} ${b[0][1]} ${b[0][2]} ${b[0][3]} ${b[0][4]}
${b[1][0]} ${b[1][1]} ${b[1][2]} ${b[1][3]} ${b[1][4]}
${b[2][0]} ${b[2][1]} ${b[2][2]} ${b[2][3]} ${b[2][4]}
${b[3][0]} ${b[3][1]} ${b[3][2]} ${b[3][3]} ${b[3][4]}
${b[4][0]} ${b[4][1]} ${b[4][2]} ${b[4][3]} ${b[4][4]}
${b[5][0]} ${b[5][1]} ${b[5][2]} ${b[5][3]} ${b[5][4]}`)

const setDescription = () => {
    return boardEmbed.setDescription(`${b[0][0]} ${b[0][1]} ${b[0][2]} ${b[0][3]} ${b[0][4]}
${b[1][0]} ${b[1][1]} ${b[1][2]} ${b[1][3]} ${b[1][4]}
${b[2][0]} ${b[2][1]} ${b[2][2]} ${b[2][3]} ${b[2][4]}
${b[3][0]} ${b[3][1]} ${b[3][2]} ${b[3][3]} ${b[3][4]}
${b[4][0]} ${b[4][1]} ${b[4][2]} ${b[4][3]} ${b[4][4]}
${b[5][0]} ${b[5][1]} ${b[5][2]} ${b[5][3]} ${b[5][4]}`)
}

const resetBoard = () => {
    return b = [
        [ [box], [box], [box], [box], [box] ], 
        [ [box], [box], [box], [box], [box] ], 
        [ [box], [box], [box], [box], [box] ], 
        [ [box], [box], [box], [box], [box] ], 
        [ [box], [box], [box], [box], [box] ], 
        [ [box], [box], [box], [box], [box] ], 
    ]
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isButton()) return;
    const letterMatch = new RegExp(`(?:_${interaction.customId}_)`, 'gi');
    if(interaction.customId === 'stop') {
        guesses = 0;
        letterSpot = 1;
        resetBoard();
        setDescription();
        previousWord = word;
        word = genWord()
        if(word === previousWord) {
            word = genWord()
        }
        keysp2.components.forEach((btn) => btn.setDisabled(true))
        keysp2row2.components.forEach((btn) => btn.setDisabled(true))

        await interaction.update({ embeds: [boardEmbed], components: [keysp2, keysp2row2] })
        return !interaction.replied && !interaction.deferred 
            ? await interaction.reply(`Stopped <@${interaction.user.id}>'s game (progress/the word itself is not saved).\nThe word was **${word}**.`) 
            : await interaction.followUp(`Stopped <@${interaction.user.id}>'s game (progress/the word itself is not saved).\nThe word was **${word}**.`)
    }
    if(letters.gray[interaction.customId] !== undefined) {
        if(interaction.customId === letters.gray[interaction.customId].match(letterMatch)[0].replace(/_/g, '')) {
                if(letterSpot === 1) {
                    b[guesses][0] = letters.gray[interaction.customId];
                    setDescription();
                    await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
                    letterSpot = letterSpot + 1;
                } else if(letterSpot === 2) {
                    b[guesses][1] = letters.gray[interaction.customId];
                    setDescription();
                    await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
                    letterSpot = letterSpot + 1;
                } else if(letterSpot === 3) {
                    b[guesses][2] = letters.gray[interaction.customId];
                    setDescription();
                    await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
                    letterSpot = letterSpot + 1;
                } else if(letterSpot === 4) {
                    b[guesses][3] = letters.gray[interaction.customId];
                    setDescription();
                    await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
                    letterSpot = letterSpot + 1;
                } else if(letterSpot === 5) {
                    b[guesses][4] = letters.gray[interaction.customId];
                    setDescription();
                    await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
                    letterSpot = 6;
                } else if (letterSpot === 6) {
                    await interaction.reply({ content: `The maximum number of letters (**5**) have already been entered.`, ephemeral: true })
                }
        }
    }
    if (interaction.customId === 'pg2') {
        await interaction.update({ embeds: [boardEmbed], components: [keysp2, keysp2row2] });
    }
    if (interaction.customId === 'pg1') {
        await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
    }
    if(interaction.customId === 'del' || interaction.customId === 'delp2') {
        if(letterSpot === 6) {
            b[guesses][4] = letters.box;
            setDescription();
            await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
            letterSpot = letterSpot - 1;
        } else if(letterSpot === 5) {
            b[guesses][3] = letters.box;
            setDescription();
            await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
            letterSpot = letterSpot - 1;
        } else if(letterSpot === 4) {
            b[guesses][2] = letters.box;
            setDescription();
            await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
            letterSpot = letterSpot - 1;
        } else if(letterSpot === 3) {
            b[guesses][1] = letters.box;
            setDescription();
            await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
            letterSpot = letterSpot - 1;
        } else if(letterSpot === 2) {
            b[guesses][0] = letters.box;
            setDescription();
            await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
            letterSpot = letterSpot - 1;
        } else if(letterSpot === 1) {
            await interaction.deferUpdate();
        }
    }
    if(interaction.customId === 'enter' || interaction.customId === 'enterp2') {
        if(letterSpot !== 6) return await interaction.reply({ content: `Need **5** letters to guess.\nCurrent amount: **${letterSpot - 1}** letters\nMissing: **${5 - (letterSpot - 1)}** letters`, ephemeral:  true });
        let currentGuess = `${b[guesses][0]}${b[guesses][1]}${b[guesses][2]}${b[guesses][3]}${b[guesses][4]}`.replace(/<:regional_indicator_/gi, '').replace(/_gray:\d+>/gi, '');
        if(!cw.check(currentGuess)) return await interaction.reply({ content: `**${currentGuess.toUpperCase()}** is not in word list.`, ephemeral:  true });
        const chars = currentGuess.split('');
        const answerLetters = word.toLowerCase().split('');

        for (let i = word.length - 1; i >= 0; i--) {
            if(chars[i].toUpperCase() === word.charAt(i)) {
              b[guesses][i] = letters.green[currentGuess[i]]
              answerLetters.splice(i, 1)
              setDescription();
            }
        }
        for (let i = 0; i < word.length; i++) {
            if (answerLetters.includes(currentGuess[i]) && currentGuess[i] !== word.toLowerCase()[i]) {
                b[guesses][i] = letters.yellow[chars[i]]
                answerLetters.splice(answerLetters.indexOf(currentGuess[i]), 1)
                setDescription();
            }
        }
        if(guesses >= 5 && letterSpot === 6) {
            await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
            guesses = 0;
            letterSpot = 1;
            resetBoard();
            setDescription();
            !interaction.replied && !interaction.deferred 
            ? await interaction.reply(`<@${interaction.user.id}> *lost* their Wordle! The word was: **${word}**`) 
            : await interaction.followUp(`<@${interaction.user.id}> *lost* their Wordle! The word was: **${word}**`)
            word = genWord()
            return;
        }
        await interaction.update({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] })
        guesses = guesses + 1;
        letterSpot = 1;
        if(currentGuess.toUpperCase() === word.toUpperCase()) {
            guesses = 0;
            letterSpot = 1;
            resetBoard();
            setDescription();
            !interaction.replied && !interaction.deferred 
            ? await interaction.reply(`<@${interaction.user.id}> *won* their Wordle! The word was: **${word}**`) 
            : await interaction.followUp(`<@${interaction.user.id}> *won* their Wordle! The word was: **${word}**`)
            previousWord = word;
            word = genWord()
            if(word === previousWord) {
                word = genWord()
            }
            return;
        }
    }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

    if(commandName === 'wordle') {
        if(keysp2row2.components[0].disabled) {
            keysp2.components.forEach((btn) => btn.setDisabled(false))
            keysp2row2.components.forEach((btn) => btn.setDisabled(false))
        }
        await interaction.reply({ embeds: [boardEmbed], components: [keys1, keys2, keys3, keys4, keys5] });
    }
	
});

client.login(TOKEN);
