document.querySelectorAll('.cart-qty-row').forEach(function(row) {
        var minus = row.querySelector('.cart-qty-minus');
        var plus = row.querySelector('.cart-qty-plus');
        var value = row.querySelector('.cart-qty-value');
        var total = row.querySelector('.cart-qty-total');
        var price = 950;
        minus.addEventListener('click', function() {
            var qty = Math.max(1, parseInt(value.textContent)-1);
            value.textContent = qty;
            total.textContent = '₱' + (qty*price).toFixed(2);
        });
        plus.addEventListener('click', function() {
            var qty = parseInt(value.textContent)+1;
            value.textContent = qty;
            total.textContent = '₱' + (qty*price).toFixed(2);
        });
    });
    // Remove button
    document.querySelectorAll('.cart-remove-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.closest('.cart-product-card').remove();
        });
    });