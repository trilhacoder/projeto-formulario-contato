function chamarAPI(nome, email, assunto, mensagem) {
    // https://github.com/github/fetch
fetch("https://formsubmit.co/ajax/trilhafront@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        Nome: nome,
        Email: email,
        Assunto: assunto,
        Mensagem: mensagem
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.success == "true") {
          document.querySelector("#mensagens").textContent = "Formulário enviado com sucesso!"
        } else {
          throw "Ocorreu um erro ao tentar enviar o formulário: " + data.message
        }
        
    })
    .catch(error => { 
       console.log(error)
       document.querySelector("#mensagens").textContent = error
    });
}