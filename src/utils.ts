import { CommandInteraction, ButtonInteraction, MessageActionRow, MessageButton, Message, DiscordAPIError, MessageSelectMenu, MessageAttachment } from 'discord.js';

function summon(x: number, y: number, interaction: CommandInteraction | ButtonInteraction, map : Array<Array<Number>>, user : Array<Number>) {
    if(map[x][y] !== 2) throw new Error('shit');
    const rows : Array<MessageActionRow> = [];
    for(let [i, j] = [x-2 ,x+2]; i < j + 1; i++) {
        if(i < 0) [i, j] = [0 , 4];
        if(j >= map.length) [i, j] = [map.length - 5, map.length - 1];
        let [l, r] = [y - 2, y + 3];
        let position = "centro";
        if(user[1] >= map[i].length - 2) {
            l = map[i].length - 5;
            r = map[i].length;
            position = "derecha";
        } else if(user[1] <= 2){
            l = 0;
            r = 5;
            position = "izquierda";
        }
        let z = 0;
        switch (position) {
            case "izquierda":
                z = 0;
            break;
            case "centro":
                z = l
            break;
            case "derecha":
                z = l
            break;
        }
        rows.push(new MessageActionRow().addComponents(map[i].slice(l, r ? r : undefined).map((e)  => {
            const button = new MessageButton()
            .setCustomId(`map_${i}_${z}`)
            .setStyle('PRIMARY');
            [i, z].toString() == user.toString() ? button.setLabel("👦") : button.setLabel(e.toString())
            if(e === 2 && button.label !== "👦") button.setEmoji("901935442398707772").setLabel("")
            z++;
            return button 
        }
        )))
    }
    if(interaction instanceof ButtonInteraction) {
        return interaction.update({ components: rows})
    }
    interaction.reply({files: ["https://i.pinimg.com/originals/88/62/5d/88625dc6b8f8bf46fdc81a5808bf800b.jpg"]})
    interaction.channel?.send({ content: "\u200B", components: rows})
    const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId("select").setPlaceholder("Habilities").addOptions({value:"hi", label:"test"}))
    interaction.channel?.send({ content:"\u200B", components: [row]})
}

export { summon }