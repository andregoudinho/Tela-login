let cadastro = false;

document.getElementById("toggle").onclick = (e) => {
    e.preventDefault();

    cadastro = !cadastro;

    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";

    document.getElementById("toggle").innerText =
        cadastro ? "Já tem conta? Faça login!" : "Não tem conta? Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";
};

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<p class='text-danger'>Email inválido!</p>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<p class='text-danger'>Senha muito curta!</p>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<p class='text-success'>Cadastro realizado!</p>";
    } else {
        let salva = localStorage.getItem(email);

        if (salva === senha) {
            mensagem.innerHTML = "<p class='text-success'>Login realizado!</p>";
        } else {
            mensagem.innerHTML = "<p class='text-danger'>Dados incorretos!</p>";
        }
    }

    document.getElementById("form-login").reset();
};