﻿const { Command } = require('yuuko');
module.exports = new Command(['rickroll'], (message) => {
message.channel.createMessage({
    embed: {
        title: `You are rickrolled`,
        description: `
        Never Gonna Give You Up
        
        We're no strangers to love
        You know the rules and so do I
        A full commitment's what I'm thinking of
        You wouldn't get this from any other guy
        
        I just wanna tell you how I'm feeling
        Gotta make you understand
        
        [Chorus:]
        Never gonna give you up, never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry, never gonna say goodbye
        Never gonna tell a lie and hurt you
        
        We've known each other for so long
        Your heart's been aching but you're too shy to say it
        Inside we both know what's been going on
        We know the game and we're gonna play it
        Источник teksty-pesenok.ru
        
        And if you ask me how I'm feeling
        Don't tell me you're too blind to see
        
        [Chorus 2x]
        
        (Ooh give you up)
        (Ooh give you up)
        (Ooh) never gonna give, never gonna give (give you up)
        (Ooh) never gonna give, never gonna give (give you up)
        
        We've known each other for so long
        Your heart's been aching but you're too shy to say it
        Inside we both know what's been going on
        We know the game and we're gonna play it
        
        I just wanna tell you how I'm feeling
        Gotta make you understand
        
        [Chorus]`,
        color: 0x7589da,
    },
});
});