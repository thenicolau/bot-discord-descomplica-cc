const { SlashCommandBuilder } = require('@discordjs/builders');
const { GuildScheduledEventManager } = require('discord.js');
const ical = require('ical');

/*Thiago Araújo - 09/09/2022
Nota:
Essa função ainda não está 100% pronta, mas está utilizável. Fique a vontade para melhorar.

O que falta (que consigo pensar):

- Adicionar exceptions (pode ser que aconteça algum erro no parser)
- tornar a função acessiveis apenas para administradores
- limpar o codigo.

*/


module.exports = {
    data: new SlashCommandBuilder()
        .setName('addevents')
        .setDescription('Adiciona todos os eventos da faculdade no calendário do discord'),
    
    async execute(interaction) {
        const data = ical.parseFile('./commands/calendar.ics'); // calendario fica em /commands/calendar.ics
    
        let qtdEvents = 0; // para contar quantos eventos foram adicionados


        // list events after now
        const now = new Date(Date.now()); // isso vai servir para ver os proximos eventos
        // let events = [];
        for(let k in data) {
            if(data.hasOwnProperty(k)) {
                let event = data[k];
                if(now < new Date(event.start.toISOString())){ // isso define os proximos eventos
                    const eventManager = new GuildScheduledEventManager(interaction.guild);
                        
                    await eventManager.create({
                        name: event.summary,
                        scheduledStartTime: new Date(event.start.toISOString()),
                        scheduledEndTime: new Date(event.end.toISOString()),
                        privacyLevel: 2,
                        entityType: 3, // Tem um enum pra isso
                        entityMetadata: {location: "Descomplica"},
                        description: event.description.replace(/(<([^>]+)>)/gi, " "),
                        });
                        
                        /*
                        // adiciona evento em um array, atualmente inutil. Seve apenas para debug.
                        events.push(
                            {
                                summary: event.summary,
                                start: event.start.toISOString(),
                                end: event.end.toISOString(),
                                description: event.description.replace(/(<([^>]+)>)/gi, " "),
                            }
                        )
                        */
                        qtdEvents++;
                    }
                }
            }
            interaction.reply(`Criado, com sucesso, \`${qtdEvents}\` próximos eventos.`);
    },
};