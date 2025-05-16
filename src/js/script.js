//Funçoes
document.addEventListener("DOMContentLoaded", function() {
    // ======================================
    // Menu Mobile Funcional
    // ======================================
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('nav ul');
    
    if (mobileMenuButton && mainNav) {
        // Criar o menu mobile como overlay
        const mobileMenuOverlay = document.createElement('div');
        mobileMenuOverlay.className = 'mobile-menu-overlay fixed inset-0 bg-black bg-opacity-80 z-50 transform -translate-x-full transition-transform duration-300';
        
        const mobileMenuContent = document.createElement('div');
        mobileMenuContent.className = 'h-full w-4/5 max-w-sm bg-darkGray p-6 overflow-y-auto';
        
        // Clonar os itens de navegação
        const navClone = mainNav.cloneNode(true);
        navClone.className = 'flex flex-col space-y-4 mt-8';
        
        // Adicionar botão de fechar
        const closeButton = document.createElement('button');
        closeButton.className = 'absolute top-6 right-6 text-white hover:text-primary transition-colors';
        closeButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
        
        // Montar a estrutura
        mobileMenuContent.appendChild(closeButton);
        mobileMenuContent.appendChild(navClone);
        mobileMenuOverlay.appendChild(mobileMenuContent);
        document.body.appendChild(mobileMenuOverlay);
        
        // Funcionalidade de abrir/fechar
        mobileMenuButton.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('-translate-x-full');
            document.body.classList.add('overflow-hidden');
        });
        
        closeButton.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('-translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
        
        // Fechar ao clicar fora do menu
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.add('-translate-x-full');
                document.body.classList.remove('overflow-hidden');
            }
        });
    }
    
    // ======================================
    // Animações de Rolagem
    // ======================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const slideObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Aplicar animações aos elementos
    document.querySelectorAll('.menu-item, .testimonial, .info-box').forEach(el => {
        el.classList.remove('animate-fade-in');
        fadeObserver.observe(el);
    });
    
    document.querySelectorAll('section > h2, .promo-item, .form-container').forEach(el => {
        el.classList.remove('animate-slide-up');
        slideObserver.observe(el);
    });
    
    // ======================================
    // Validação de Formulários
    // ======================================
    
    // Função genérica para validar formulários
    function validateForm(formId, fields, successCallback) {
        const form = document.getElementById(formId);
        if (!form) return;
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const formData = {};
            
            // Validar cada campo
            fields.forEach(field => {
                const input = document.getElementById(field.id);
                if (!input) return;
                
                formData[field.id] = input.value.trim();
                
                // Remover mensagens de erro anteriores
                const errorElement = input.parentElement.querySelector('.error-message');
                if (errorElement) errorElement.remove();
                
                // Resetar estilo
                input.classList.remove('border-red-500');
                input.classList.add('focus:border-primary');
                
                // Validar campo
                if (field.required && !input.value.trim()) {
                    isValid = false;
                    showError(input, field.errorMessage || 'Este campo é obrigatório');
                } else if (field.type === 'email' && !validateEmail(input.value.trim())) {
                    isValid = false;
                    showError(input, 'Por favor, insira um email válido');
                } else if (field.type === 'tel' && !validatePhone(input.value.trim())) {
                    isValid = false;
                    showError(input, 'Por favor, insira um telefone válido');
                } else if (field.type === 'date' && !validateFutureDate(input.value.trim())) {
                    isValid = false;
                    showError(input, 'A data deve ser futura');
                }
            });
            
            // Se válido, executar callback de sucesso
            if (isValid && typeof successCallback === 'function') {
                successCallback(formData);
            }
        });
    }
    
    // Funções auxiliares de validação
    function showError(input, message) {
        input.classList.remove('focus:border-primary');
        input.classList.add('border-red-500');
        
        const errorElement = document.createElement('p');
        errorElement.className = 'error-message text-red-500 text-xs mt-1';
        errorElement.textContent = message;
        
        input.parentElement.appendChild(errorElement);
    }
    
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function validatePhone(phone) {
        return /^(\+\d{1,3})?\s?$$?\d{2,3}$$?[\s.-]?\d{4,5}[\s.-]?\d{4}$/.test(phone);
    }
    
    function validateFutureDate(dateStr) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const date = new Date(dateStr);
        return date >= today;
    }
    
    // Validação do formulário de contato
    validateForm('form-contato', [
        { id: 'nome-contato', required: true },
        { id: 'email-contato', required: true, type: 'email' },
        { id: 'assunto-contato', required: true },
        { id: 'mensagem-contato', required: true }
    ], function(formData) {
        // Animação de sucesso
        const form = document.getElementById('form-contato');
        form.classList.add('opacity-50', 'pointer-events-none');
        
        // Mostrar mensagem de sucesso
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4 animate-fade-in';
        successMessage.innerHTML = `
            <strong class="font-bold">Mensagem enviada!</strong>
            <span class="block sm:inline"> Obrigado pelo contato, ${formData['nome-contato']}. Responderemos em breve.</span>
        `;
        
        form.parentElement.appendChild(successMessage);
        
        // Resetar formulário após delay
        setTimeout(() => {
            form.reset();
            form.classList.remove('opacity-50', 'pointer-events-none');
            successMessage.remove();
        }, 3000);
    });
    
    // Validação do formulário de reserva
    validateForm('form-reserva', [
        { id: 'nome-reserva', required: true },
        { id: 'email-reserva', required: true, type: 'email' },
        { id: 'telefone-reserva', required: true, type: 'tel' },
        { id: 'data-reserva', required: true, type: 'date' },
        { id: 'hora-reserva', required: true },
        { id: 'numero-pessoas', required: true }
    ], function(formData) {
        // Animação de sucesso
        const form = document.getElementById('form-reserva');
        form.classList.add('opacity-50', 'pointer-events-none');
        
        // Mostrar mensagem de sucesso
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4 animate-fade-in';
        successMessage.innerHTML = `
            <strong class="font-bold">Reserva solicitada!</strong>
            <span class="block sm:inline"> Obrigado, ${formData['nome-reserva']}. Sua reserva para ${formData['numero-pessoas']} pessoa(s) 
            no dia ${formData['data-reserva']} às ${formData['hora-reserva']} foi recebida. Confirmaremos em breve.</span>
        `;
        
        form.parentElement.appendChild(successMessage);
        
        // Resetar formulário após delay
        setTimeout(() => {
            form.reset();
            form.classList.remove('opacity-50', 'pointer-events-none');
            successMessage.remove();
        }, 5000);
    });
    
    // ======================================
    // Efeitos Visuais Adicionais
    // ======================================
    
    // Efeito hover em botões
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('scale-105');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('scale-105');
        });
    });
    
    // Efeito parallax suave em imagens de fundo
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        document.querySelectorAll('.bg-parallax').forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });
    
    // Contador animado para números 
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        const countObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let count = 0;
                    const updateCounter = () => {
                        const increment = target / 50;
                        if (count < target) {
                            count += increment;
                            counter.textContent = Math.ceil(count);
                            setTimeout(updateCounter, 20);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        countObserver.observe(counter);
    });
});

