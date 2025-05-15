//Funçoes

document.addEventListener("DOMContentLoaded", function() {
    // Menu Mobile 
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNavUl = document.querySelector(".main-nav ul");

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener("click", function() {
            mainNavUl.classList.toggle("active");
            const isExpanded = mainNavUl.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
            if (isExpanded) {
                menuToggle.innerHTML = "&#10005;"; // Ícone de fechar (X)
                menuToggle.setAttribute("aria-label", "Fechar menu");
            } else {
                menuToggle.innerHTML = "&#9776;"; // Ícone de menu (hambúrguer)
                menuToggle.setAttribute("aria-label", "Abrir menu");
            }
        });
    }

    // Simulação de envio de formulário de Contato
    const formContato = document.getElementById("form-contato");
    if (formContato) {
        formContato.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            
            const nome = document.getElementById("nome-contato").value;
            const email = document.getElementById("email-contato").value;
            const assunto = document.getElementById("assunto-contato").value;
            const mensagem = document.getElementById("mensagem-contato").value;

            if (nome && email && assunto && mensagem) {
                alert("Olá " + nome + ", sua mensagem sobre '" + assunto + "' foi recebida! Entraremos em contato em breve pelo email " + email + ".\n(Esta é uma simulação, nenhum dado foi realmente enviado.)");
                formContato.reset(); // Limpa o formulário
            } else {
                alert("Por favor, preencha todos os campos obrigatórios do formulário de contato.");
            }
        });
    }

    // Simulação de envio de formulário de Reserva
    const formReserva = document.getElementById("form-reserva");
    if (formReserva) {
        formReserva.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio real do formulário

            const nome = document.getElementById("nome-reserva").value;
            const email = document.getElementById("email-reserva").value;
            const telefone = document.getElementById("telefone-reserva").value;
            const data = document.getElementById("data-reserva").value;
            const hora = document.getElementById("hora-reserva").value;
            const pessoas = document.getElementById("numero-pessoas").value;

            if (nome && email && telefone && data && hora && pessoas) {
                // Validação simples da data (não pode ser no passado)
                const hoje = new Date().toISOString().split("T")[0];
                if (data < hoje) {
                    alert("A data da reserva não pode ser no passado. Por favor, escolha uma data futura.");
                    return;
                }

                alert("Olá " + nome + ", sua solicitação de reserva para " + pessoas + " pessoa(s) no dia " + data + " às " + hora + " foi recebida!\nEntraremos em contato em breve pelo email " + email + " ou telefone " + telefone + " para confirmar.\n(Esta é uma simulação, nenhum dado foi realmente enviado.)");
                formReserva.reset(); // Limpa o formulário
            } else {
                alert("Por favor, preencha todos os campos obrigatórios do formulário de reserva.");
            }
        });
    }

});

