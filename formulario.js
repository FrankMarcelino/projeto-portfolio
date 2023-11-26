const formulario = document.querySelector('form')

function formularioEnviado(reposta) {
    if(reposta.ok){
        formulario.innerHTML = "<p style='color:green;'>Menssagem enviada com sucesso! Em breve entraremos em contato</p>"
    }else{
        formulario.innerHTML = "<p style='color:red;'>Erro no envio, você pode enviar diretamente para o nosso email em: contato@surrealiza.com</p>"
    }
}


function  enviarFormulario(event) {
    event.preventDefault()
    const botao = document.querySelector('form button')
    botao.disabled = true
    botao.innerText = 'Enviando...'

    const data = new FormData(formulario)

    fetch('./enviar.php', {
        method: 'POST',
        body: data
    }).then(formularioEnviado)
}

formulario.addEventListener("submit", enviarFormulario)