const express = require('express'); //Pedindo o módulo express(framework express);
const routes = require('./routes');

const app = express() // criar uma var que armazena a nossa aplicação. 

app.use(express.json()); // Estou falando para o express que todos meus corpos de requisição serão json.

app.use(routes); // Usar o arquivo de rotas.

app.listen(3333); // a aplicação irá ouvir a rota 3333 = localhost:3333