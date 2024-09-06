const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "basic",
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
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
[ *D.E.S.K-MD* ]
━━━━━━━━━━━━━❒        
│Owner : Adorieru D. Kamado VII
│Prefix : ~
│Commands : ${commands.length}
│Developer : Wasuke KAMADO
╰━━━━━━━━━━━━━❒
HELLO THIS IS D.E.S.K-MD
━━━━━━━━━━━━━❒        
©LAUREAT-BOT
━━━━━━━━━━━━❒

> *BASICS* 🔶
${menu.basics}

> *ADVENTURE* 🎮
${menu.adventure}

> *STORY* 🎥
${menu.story}

> *PROFILE* 👤
${menu.profile}

POWERED BY RAIZEN_LINKID ❄️
        `;

        // Envoyer le menu en message
        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
