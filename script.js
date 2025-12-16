document.addEventListener('DOMContentLoaded', () => {
    // === LÓGICA DEL MENÚ MÓVIL ===
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // === LÓGICA DEL CARRUSEL (SLIDER) ===
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5000ms = 5 segundos

    function nextSlide() {
        // 1. Quitar la clase 'active' de la imagen actual
        slides[currentSlide].classList.remove('active');

        // 2. Calcular el índice de la siguiente imagen
        // El operador % (módulo) hace que si llegamos al final, vuelva a 0
        currentSlide = (currentSlide + 1) % slides.length;

        // 3. Añadir la clase 'active' a la nueva imagen
        slides[currentSlide].classList.add('active');
    }

    // Iniciar el cambio automático
    setInterval(nextSlide, slideInterval);
});

// === LÓGICA DEL WIDGET DE WHATSAPP ===
    const toggleChatBtn = document.getElementById('toggleChat');
    const closeChatBtn = document.getElementById('closeChat');
    const chatBox = document.getElementById('chatBox');
    const sendBtn = document.getElementById('sendBtn');
    const userMsgInput = document.getElementById('userMsg');

    // 1. Abrir/Cerrar la ventana al hacer clic en el logo
    toggleChatBtn.addEventListener('click', () => {
        chatBox.classList.toggle('active');
        if (chatBox.classList.contains('active')) {
            userMsgInput.focus(); // Poner el cursor para escribir
        }
    });

    // 2. Botón X para cerrar
    closeChatBtn.addEventListener('click', () => {
        chatBox.classList.remove('active');
    });

    // 3. Función para enviar mensaje a WhatsApp
    function sendMessage() {
        const message = userMsgInput.value.trim();
        if (message !== "") {
            // Número de teléfono
            const phone = "51999909380";
            
            // Texto base opcional + mensaje del usuario
            // Ejemplo: "Hola, [mensaje usuario]"
            const finalMessage = `${message}`;
            
            // Crear link encoded
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
            
            // Abrir en nueva pestaña
            window.open(url, '_blank');
            
            // Limpiar input y cerrar (opcional)
            userMsgInput.value = "";
            chatBox.classList.remove('active');
        }
    }

    // Enviar al hacer clic en el avioncito
    sendBtn.addEventListener('click', sendMessage);

    // Enviar al presionar "Enter" en el teclado
    userMsgInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });