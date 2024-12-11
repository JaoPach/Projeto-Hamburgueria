//função para "pegar" os eventos do front-end (objetos do front-end)
document.getElementById('enviarMensagem').addEventListener('submit', function(event){
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const empresa_id = document.getElementById('empresa_id').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    //objeto json para enviar para a API em NODEJS
    const data ={
        nome:nome,
        email:email,
        telefone:telefone,
        mensagem:mensagem,
        empresa_id: empresa_id
    };

    //endereço da API para cadastrar um objeto
    fetch('http://localhost:8081/api/enviarMensagem',{
        method:'POST',
        //tipo do conteúdo no cabeçalho é d tipo JSON
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })


//tratar os status code da API
.then(response=>{
    if(response.status === 200){
        return response.json();
    }
    else if(response.status === 401){
        return response.json()
    }
    else{
        throw new Error("Cadastro inválido");
    }
})

//tratar as mensagens da API
.then(data =>{
    if(data.msg === "Mensagem enviada com sucesso!!!"){
        alert('Mensagem enviada com sucesso')
        document.getElementById('enviarMensagem').reset();
    }
    else{
        alert('Ocorreu um erro ao cadastrar ' + data.msg)
    }
})

.catch((error)=>{
    console.error("Erro ao enviar dados:", error);
    alert("Ocorreu um erro. Por favor, tente novamente.");
    throw new Error(error);
    
});
});