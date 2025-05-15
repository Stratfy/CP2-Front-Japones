// Funções  específicas para a página de contato 

document.addEventListener("DOMContentLoaded", function() {
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
    
    // Função para verificar se o mapa está visível e adicionar interatividade
    const mapaContainer = document.getElementById("mapa-localizacao");
    if (mapaContainer) {
        // Aqui você pode adicionar funcionalidades adicionais relacionadas ao mapa
        console.log("Mapa de localização carregado com sucesso!");
    }
});

