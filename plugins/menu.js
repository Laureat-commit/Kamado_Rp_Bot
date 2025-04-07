const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "basics",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        const config = await readEnv();

        // Initialisation des sections spécifiques du menu
        let menu = {
            basics: '',
            adventure: '',
            story: '',
            profile: ''
        };

  for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

   // Construire le message du menu avec les catégories spécifiques
        let madeMenu = `
[ *WASUKE MD* ]
━━━━━━━━━━━━━❒        
│Owner :  ${pushname}
│Prefix : ${config.PREFIX}
│Commands : ${commands.length}
│Developer :  Wasuke KAMADO
╰━━━━━━━━━━━━━❒
 HELLO THIS IS WASUKE MD
╰━━━━━━━━━━━━━❒        
 ©KAMADO-BOT
╰━━━━━━━━━━━━━❒

> *BASICS* ❄️
 ${menu.basics}
╰━━━━━━━━━━━━━❒
> *ADVENTURE* 🦅
 ${menu.adventure}
╰━━━━━━━━━━━━━❒
> *STORY* 🎥
 ${menu.story}
╰━━━━━━━━━━━━━❒
> *PROFILE* 👤
 ${menu.profile}
╰━━━━━━━━━━━━━❒
POWERED BY WASUKE D KAMADO 🌠 
        `;

        // Envoyer le menu en message
        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
