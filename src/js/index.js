// Funções JavaScript específicas para a página inicial (index.html)

document.addEventListener("DOMContentLoaded", function() {
    // Animação suave para os cards de destaque
    const destaqueItems = document.querySelectorAll('.destaque-item');
    
    if (destaqueItems.length > 0) {
        // Adiciona efeito de hover com JavaScript para melhor controle
        destaqueItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            });
        });
    }
    
    // Botões de CTA com efeito de clique
    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    
    if (ctaButtons.length > 0) {
        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Se o botão não tem href ou é # (placeholder), previne navegação
                if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                    e.preventDefault();
                    alert('Funcionalidade em desenvolvimento! Em breve você poderá acessar esta área.');
                }
            });
        });
    }
});
