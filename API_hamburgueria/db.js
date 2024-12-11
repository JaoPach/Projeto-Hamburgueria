//ARQUIVO DB É UTILIZADO PARA CRIAR A CONEXÃO COM O BANCO DE DADOS
const mysql = require("mysql2/promise")

//criar a conxão com o banco de dados 
//string para se comunicar com o banco de dados 
const client = mysql.createPool({
    host: "localhost", //host padrão do banco de dados 
    port: 3306, //porta padrão do banco de dados 
    user:"root", //usuário padrão do banco 
    password:"admin", //senha do banco de dados 
    database:"haburguer" //nome do banco de dados 
}) 

module.exports = client