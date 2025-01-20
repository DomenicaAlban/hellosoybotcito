const tmi = require('tmi.js'),
    { channel, username, password } = require('./config.json');
const express = require("express");
const app = express();
const port = 3000;
const keepAlive = require("./server");

const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true
  },
  identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('message', (channel, user, message, self, tags) => {
  if (self) return;

  if (message === '!commands') {
    client.say(channel, `@${user.username} Los comandos son: !redes, !discord, !mods, !fiel, !lurk, !roll, !botcito, !8ball !moneda`);
  }

  if (message === '!comandos') {
    client.say(channel, `@${user.username} Los comandos son: !redes, !discord, !mods, !fiel, !lurk, !roll, !botcito, !8ball !moneda`);
  }

  if(message == '!mods') {
        client.say(channel, `@${user.username}, Los mods del canal son: Mome, Titania, Fraught, Wilwal, Marce y bueno... Yo :D`);
    }
  
  if(message == '!fiel') {
        client.say(channel, `@${user.username} es ${Math.floor(Math.random() * 101)}% fiel! Le creemos?`);
    }

  if (message === '!roll') {
    client.say(channel, `@${user.username} ha lanzado un ${Math.floor(Math.random() * 6) + 1}!`);
  }

  if(message == '!lurk') {
        client.say(channel, `@${user.username} va a estar lurkeando el stream hellos17RosadeGuadalupe `);
    }
  
  if(message == '!botcito') {
        client.say(channel, `@${user.username} Fui creado por Mome! hellos17RosadeGuadalupe `);
    }

  if(message == '!discord') {
        client.say(channel, `Tenemos un nuevo Discord! Ingresa en este link: https://discord.gg/hgP7BVF9fR`);
    }

 // Comando !8ball
  if (message.toLowerCase().startsWith('!8ball')) {
    const responses = [
      'Sí',
      'No',
      'Tal vez',
      'No puedo predecirlo',
      'Definitivamente',
      'No lo sé',
      'Intenta nuevamente',
    ];

    // Generar una respuesta aleatoria
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Enviar la respuesta al chat
    client.say(channel, `@${user.username}, la respuesta a tu pregunta es: ${randomResponse}`);
  }

  // Comando !moneda
  if (message.toLowerCase().startsWith('!moneda')) {
    const responses = [
      'Cara',
      'Sello',
    ];

    // Generar una respuesta aleatoria
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Enviar la respuesta al chat
    client.say(channel, `@${user.username}, lanzaste una moneda y salio: ${randomResponse}`);
  }

 
});