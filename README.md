# Discord-Wordle
Ever want to play Wordle as much as you want... on Discord? Now you can!

## How do I run the bot in my own server? 
Read and follow the instructions below!
**This is a node.js repository. All dependencies were installed via npm (Node Package Manager).**
Please note that this is not a guide on how to make a discord bot, nor how to code. This guide will give basic guidance steps but will focus on running the code itself. This means that some concepts may not be explained or throroughly explored, like hosting the bot on a VPS (this guide covers local hosting) or the details of what the code does.

Don't have node?
* [Download Node here](https://nodejs.org/en/download/)

##### Resources
* Download all of the recolored emojis (yellow, gray, and green letters as well as a blank gray box) that I created [here](https://www.mediafire.com/folder/307k79w6ds8ud/letters_%26_box)
  **NOTE:** You must upload these to possibly multiple servers __with your bot in them__ to be able to use all of them. Change the emoji IDs (discoverable via `\:emoji:`) in the   `letter.js` file to match the emoji IDs to the ones __you__ created.
  A guide on adding your bot to servers can be found [here](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#adding-your-bot-to-servers)

##### Initial Setup
If you haven't already, [create a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

1. Assuming you have npm installed, run the following in the directory you want to host the bot in:
```
npm init -y
```
Then,
```
npm i random discord.js discord-api-types check-word @discordjs/builders @discordjs/rest
```

2. Create 4 files:
  - `index.js`
  - `letter.js`
  - `deploy-commands.js`
  - `wordtest.txt`
  (These files can be named whatever you want, but you must make the appropriate change to the file names referenced in other files)

3. Copy the code from the files listed above in the repository and paste it into their respective files.
  **NOTE:** Replace "TOKEN" in `index.js` and `deploy-commands.js` to your bot application token. 
  In `deploy-commands.js`, change the `clientID` and `guildID` constants to your bot applications client ID and the guild ID youd like to register the commands in respectively. 
  Finding your guildID is only possible via Discord's [developer mode](https://www.howtogeek.com/714348/how-to-enable-or-disable-developer-mode-on-discord/).
  This includes the `.txt` file (just copy and paste from the one in the repository).
  
  Changing the emoji IDs to your own in `letter.js` is covered under the **Resources** section.
 
 4. In your terminal (in the bots directory, so it works), run:
 ```node deploy-commands.js```
 This uploads the **/wordle** command to the guild ID you specified.
 
 5. Almost done! Before the last step — run through this checklist to make sure you've covered everything:
 - [] Are the emoji IDs in `letter.js` ones *you've uploaded* and not the same ones in the base file?
 - [] Have you replaced "TOKEN" with your Bot Application Token in `index.js`?
 - [] Are all the required dependencies installed?
 - [] Is the bot [added to the server you want?](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#adding-your-bot-to-servers)

6. In your terminal, run:
```node index.js```

And that should be it! You can test if everything is working correctly by going into the server you registed the wordle command in and entering **/wordle**.
For a more reliable uptime, look into discord bot hosting online.
 
  
