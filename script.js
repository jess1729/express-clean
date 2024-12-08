// Navegação suave para links do menu
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Ajuste para evitar sobreposição pelo cabeçalho
                behavior: "smooth"
            });
        }
    });
});

// Formulário: Confirmação de envio
const form = document.getElementById("formContato");
const mensagemConfirmacao = document.getElementById("mensagemConfirmacao");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio real para simular o envio

    // Mostrar mensagem de confirmação
    mensagemConfirmacao.style.display = "block";

    // Limpar o formulário
    form.reset();

    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
        mensagemConfirmacao.style.display = "none";
    }, 5000);
});

// Mensagem dinâmica no cabeçalho (opcional)
const headerMessage = document.querySelector("header h1");
const messages = ["Bem-vindo ao EXPRESS CLEAN!", "Sua solução em limpeza pós-obra!", "Deixe a limpeza conosco!"];
let currentMessageIndex = 0;

function changeHeaderMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    headerMessage.textContent = messages[currentMessageIndex];
}

// Trocar mensagem a cada 5 segundos
