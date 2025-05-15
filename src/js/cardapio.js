// Funções JavaScript específicas para a página de cardápio (cardapio.html)

document.addEventListener("DOMContentLoaded", function() {
    // Animação suave para os cards de menu
    const menuItems = document.querySelectorAll('.menu-item-card');
    
    if (menuItems.length > 0) {
        // Adiciona efeito de hover com JavaScript para melhor controle
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-6px)';
                this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            });
        });
    }
    
    // Destaque para linhas da tabela de preços
    const tableRows = document.querySelectorAll('.price-table tbody tr');
    
    if (tableRows.length > 0) {
        tableRows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#EAE0D5';
            });
            
            row.addEventListener('mouseleave', function() {
                // Restaura a cor original baseada na paridade da linha
                const isEven = Array.from(tableRows).indexOf(this) % 2 === 1;
                this.style.backgroundColor = isEven ? '#F8F0E8' : '';
            });
        });
    }
});
