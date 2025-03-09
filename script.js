alert("Bem-vindo ao meu site!");

function mudarCor() {
    let cores = ["red", "blue", "green", "purple", "orange"];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

function validarFormulario(event) {
    event.preventDefault(); // Impede o envio automático do formulário

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
}



