var formulario = document.querySelector('form#form1');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    var dados = new FormData(formulario);
    var nome = dados.get('nome');
    var email = dados.get('email');
    var turma = dados.get('turma');
    var motivo = dados.get('motivo');
    var mensagem = dados.get('mensagem');
    
    console.log(nome, email, turma, motivo, mensagem);

    
    var resultado = document.createElement('p');
    resultado.innerHTML = "";
    resultado.innerHTML = `
        ${nome}, sua mensagem foi enviada com sucesso!
    `
    formulario.append(resultado);

    var templateParams = {
    nome: nome,
    mensagem: mensagem,
    from_name: "Edilio Ricardo de Lima Junior",
};

emailjs.send("service_9xooivc","template_e85k5su", templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error)
    });
   
});