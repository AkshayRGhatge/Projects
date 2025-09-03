  
  // On the click of the Add button, show Added message
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const addedMessage = button.parentElement.querySelector('.added-to-cart');
            addedMessage.style.opacity = '1';
            setTimeout(() => {
                addedMessage.style.opacity = '0';
            }, 2000);
        });
    });``