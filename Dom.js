document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        const item = this.parentElement;
        let quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (action === 'increase') {
            quantity++;
        } else if (action === 'decrease' && quantity > 1) {
            quantity--;
        }
        quantityElement.textContent = quantity;
        calculateTotalPrice();
    });
});

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        item.remove();
        calculateTotalPrice();
    });
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

function calculateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        totalPrice += quantity * 10; // Prix par article (10 dans cet exemple)
    });
    document.getElementById('total-price').textContent = 'Prix total : ' + totalPrice;
}
