// Funções JavaScript específicas para a página sobre (sobre.html)

document.addEventListener("DOMContentLoaded", function() {
    // Animação suave para os itens de filosofia
    const filosofiaItems = document.querySelectorAll('.filosofia-item');
    
    if (filosofiaItems.length > 0) {
        // Adiciona efeito de hover com JavaScript para melhor controle
        filosofiaItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            });
        });
    }
    
    // Destaque para itens da lista
    const listItems = document.querySelectorAll('.filosofia-item ul li');
    
    if (listItems.length > 0) {
        listItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.color = 'var(--cor-vinho)';
                this.style.fontWeight = 'bold';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.color = '';
                this.style.fontWeight = '';
            });
        });
    }
});
