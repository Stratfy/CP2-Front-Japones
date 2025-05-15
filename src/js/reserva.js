// Funções JavaScript específicas para a página de reserva (reserva.html)

document.addEventListener("DOMContentLoaded", function() {
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
