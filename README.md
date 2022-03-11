# Print:
![](https://github.com/trilhafront/projeto-form-contato/blob/main/prints/01-form.png)

# Funcionalidade
Envio de formulário de contato.

# Regras de negócio
1. O formulário só deve ser enviado se todos os campos obrigatórios estiverem preenchidos
2. Caso existam campos obrigatórios não preenchidos, exibir a mensagem: "Preencha os campos obrigatórios e envie novamente o formulário.
3. O formulário deve ser enviado para o e-mail “trilhafront@gmail.com”
4. Se o formulário for enviado com sucesso, exibir a mensagem: "Formulário enviado com sucesso!"
5. Se ocorrer algum erro no envio do formulário, exibir a mensagem: "Ocorreu um erro ao tentar enviar o formulário: <detalhes do erro>"

# Design
https://www.figma.com/file/nx4GKpemLgIla2CWNpBQGF/Projeto-Formul%C3%A1rio-de-Contato

# Front-end

## HTML: criar a estrutura da página, com base no design fornecido.
* Criar o arquivo index.html que irá conter todo o HTML da página
* Criar a estrutura básica de um documento HTML: tags html, head e body
* form: tag representando o formulário
* h1: tag representando o título do formulário
* p: tag representando as mensagens a serem exibidas após o envio do formulário e o preenchimento dos campos obrigatórios
* label: tag representando o rótulo (nome) de um campo no formulário
* input: tag representando um campo no formulário
* textarea: tag representando a área de texto para digitação da mensagem a ser enviada
* button: tag representando o botão para envio (submit) do formulário

## CSS: criar o estilo da página, com base no design fornecido.
* Criar o style.css que conterá todo o estilo da página
* No index.html usar a tag link para importar esse style.css
* Criar as classes (class) no HTML para aplicação dos estilos no CSS
* Usar o seletor CSS de classe (o ponto . ) para selecionar e aplicar os estilos nos elementos HTML
* Especificidade e sobrescrita de seletores CSS

## JavaScript: criar a interatividade da página, com base no design e regras de negócio fornecidos.
* Criar o script.js que conterá todo o JavaScript da página
* No index.html usar a tag script para importar esse script.js
* addEventListener: para o tratamento do evento de submeter (enviar) o formulário
* event.preventDefault: para evitar o comportamento padrão de recarregar a página no envio do formulário
* querySelector: para selecionar elementos HTML da página
* forEach: para iterar (navegar) sobre elementos de um array (coleção de elementos)
* classList: para adicionar e remover classes dos elementos HTML da página

## Se comunicando com o Back-end e enviando e-mail com a API FormSubmit
* Instalar a extensão web server do Chrome, por que a API só permite ser chamada de um web server: [https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=pt-br](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=pt-br)
* Chamar a API (Back-end) para enviar os dados do form para o e-mail trilhafront@gmail.com: [https://formsubmit.co/ajax-documentation](https://formsubmit.co/ajax-documentation)
* Tratamento de erro exibindo mensagem de sucesso ou falha no envio

## Refatorando o código
* Organizar o index.js em funções menores e reutilizáveis
* Isolar a chamada da API em outro arquivo .js
