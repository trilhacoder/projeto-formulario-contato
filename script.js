var formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", function(event) {
  event.preventDefault()

  var campos = [formulario.nome, formulario.email, formulario.assunto, formulario.mensagem]
  var isFormularioValido = validaFormulario(campos);

  if (!isFormularioValido) {
    document.querySelector("#mensagens").textContent = "Preencha os campos obrigatórios e envie novamente o formulário."
  } else {
    document.querySelector("#mensagens").textContent = ""
    
    // Envia os dados do formulario para a API
    chamarAPI(formulario.nome.value, 
              formulario.email.value, 
              formulario.assunto.value, 
              formulario.mensagem.value)
  }
})

function validaFormulario(campos) {
  var isFormularioValido = true;
  campos.forEach(function(campo) {
	if (campo.value == "") {
      isFormularioValido = false;
      campo.classList.add("campo-invalido")
    } else {
      campo.classList.remove("campo-invalido")
    }
  })
  return isFormularioValido
}