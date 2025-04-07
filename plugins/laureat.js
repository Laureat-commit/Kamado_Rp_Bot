const { cmd } = require('../command'); // Gestionnaire de commandes
const config = require('../config'); // Si tu utilises un fichier de configuration pour l'image

cmd({
    pattern: "laureat",
    desc: "Affiche la description du royaume LAUREAT avec une image",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const laureatText = `
*🏰 LAUREAT-KINGDOM🔶*
*═════════════════*
_*~LAUREAT berceau des guerriers de l'infini.*_
*═════════════════*
*📝 LAUREAT description: 😉Bienvenue chère guerrière, cher guerrier. Je m'appelle D.E.S.K et comme tu as manipulé cette commande je vais donc te satisfaire.*
*LAUREAT est un royaume, un royaume qui autre fois n'était qu'une petite troupe de combattants qui passaient leurs temps à se battre et à se battre. Un terrible jour, une grande guerre aura lieu opposant les dieux contre les dieux, certes les humains ne seront pas mis à côté, les conséquences de cette guerre seront si désastreuses que LAUREAT ira en vrille. Des années plus tard, LAUREAT aura une nouvelle chance de voir le jour à nouveau, sous une forme bien plus belle grâce à un certain Adorieru D. Kamado VII, depuis lors LAUREAT continue de prospérer comme le royaume le plus puissant.*
*🙂Tiens une petite information en plus, chaque 250 points au classement te fait évoluer en grade.*

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

   *🔶𝗟𝗔𝗨𝗥𝗘𝗔𝗧 𝗚𝗔𝗠𝗜𝗡𝗚🎮*
`;

    // Image à utiliser (peut venir d'une config ou être spécifiée directement)
    const imageUrl = 'https://files.catbox.moe/gkyepp.jpg'; // Remplace par ton image ou config.ALIVE_IMG

    try {
        // Envoi de l'image avec la légende
        return await conn.sendMessage(from, {
            image: { url: imageUrl },  // Utilisation de l'URL de l'image
            caption: laureatText,      // Texte à afficher en légende
        }, { quoted: mek });

    } catch (err) {
        console.error("Erreur lors de l'envoi de l'image:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi de l'image. Réessaie plus tard.");
    }
});
