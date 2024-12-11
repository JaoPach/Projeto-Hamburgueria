//ARQUIVO DE FUNÇÕES PARA REALIZAR AS CONSULTAS NA TABELA DO BANCO DE DADOS
//import da conexão do banco
const connection = require('./db')

//cadastrar todos os dados no banco 
// module.exports.register = async(nome,email,telefone,mensagem,empresa_id) =>{
//     try{
//         const [result] = await connection.query("INSERT INTO contato (nome, email, telefone, mensagem, empresa_id) values(?,?,?,?,?)",[nome,email,telefone,mensagem,empresa_id]) 
//     }
//     catch (erro) {
//         console.error("Erro ao inserir no banco de dados:", erro);
//         throw erro; 
//     }
    
// };