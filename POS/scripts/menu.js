  // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const cartToggle = document.getElementById('cart-toggle');
    const cartPanel = document.getElementById('cart-panel');
    const cartClose = document.getElementById('cart-close');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // Toggle mobile cart
    cartToggle.addEventListener('click', () => {
        cartPanel.classList.toggle('show');
    });

    // Close mobile cart
    cartClose.addEventListener('click', () => {
        cartPanel.classList.remove('show');
    });

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('show');
        }
        if (!cartPanel.contains(e.target) && !cartToggle.contains(e.target)) {
            cartPanel.classList.remove('show');
        }
    });

    // Prevent menu from closing when clicking inside
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    cartPanel.addEventListener('click', (e) => {
        e.stopPropagation();
    });

