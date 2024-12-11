//import das bibliotecas
const express = require('express')

//importar as consultas SQL do arquivo functions
const connection = require('./db')
const consulta = require('./functions')
const routers = express.Router()

//rota raiz do servidor
routers.get('/', (req, res) =>{
    res.status(200).json({msg: "API ESTÁ CONECTADA"})
})

// //rota para listar os colaboradores 
// routers.get('/listarClientes', async(req, res)=>{
//     try{
//         const get = await consulta.getALL()
//         res.status(200).json(get)
//     }
//     catch(erro){
//         console.log(erro)
//     }
// })

//rota para cadastrar um colaborador 
routers.post('/api/enviarMensagem', async(req, res)=>{
    const {nome,email,telefone,mensagem,empresa_id} = req.body;
    console.log(req.body);
    try{
        //chamada da função register para cadastrar um usuário
        const result = connection.query("INSERT INTO contato (nome, email, telefone, mensagem, empresa_id) values(?,?,?,?,?)",[nome,email,telefone,mensagem,empresa_id]);
            if(result){
                res.status(200).json({ msg:"Mensagem enviada com sucesso!!!"});
            }
            else{
                res.status(401).json({ msg: "Erro ao cadastrar!" });
            }
    }
    catch(erro){
        console.log(erro)
        
    }
})

module.exports = routers