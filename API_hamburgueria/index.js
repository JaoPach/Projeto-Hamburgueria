//arquivo para criar a url da conexão da API
//import das bibliotecas a seres utilizadas 
const express = require("express")
const client = require("./db") //import da variável do arquivo db.js
const routers = require("./routers") //import da variável do arquivo routers.js
const cors = require('cors')

//uso do objeto express
const app = express()


app.use(express.json()) //aceitar objetos no formato JSON
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  };
 
  app.use(cors(corsOptions));
app.use(routers) //uo das rotas criadas para a API

//criar a conexão do servidor
client.query("select 1")
.then(() => {
    console.log('success')
    app.listen(8081, function(){
        console.log("Servidor executando na url: http://localhost:8081")
    })
})