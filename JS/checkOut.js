// Utility to format PHP
function formatPHP(val) {
    return '₱' + Number(val).toFixed(2);
}

// Example: delivery address from backend
const deliveryInfo = {
    name: 'Juan Dela Cruz',
    number: '+63 912 345 6789',
    address: '123 Quezon City',
    isDefault: true
};

function renderDeliveryAddress(info) {
    const el = document.getElementById('deliveryAddress');
    el.innerHTML = `<span class="fw-semibold">${info.name}</span> <span class="text-muted">${info.number}</span> ${info.address} ${info.isDefault ? '<span class="badge bg-secondary">Default</span>' : ''} <button class="btn btn-link btn-sm p-0 ms-2">Change</button>`;
}

// Example products (replace with backend data)
const products = [
    { id: 1, name: 'Product Name', subtitle: 'Set of Product Name', price: 950, qty: 1, img: null },
    { id: 2, name: 'Product Name', subtitle: 'Set of Product Name', price: 950, qty: 1, img: null }
];

// Render products
function renderProducts() {
    const tbody = document.getElementById('checkoutProductsBody');
    tbody.innerHTML = '';
    products.forEach(prod => {
        tbody.innerHTML += `
                    <tr data-id="${prod.id}">
                        <td style="width:70px;"><div style="width:60px;height:60px;background:#e3eafc;border-radius:8px;">${prod.img ? `<img src='${prod.img}' alt='${prod.name}' style='width:100%;height:100%;object-fit:cover;border-radius:8px;'>` : ''}</div></td>
                        <td><div class='fw-semibold'>${prod.name}</div><div class='text-muted' style='font-size:0.95rem;'>${prod.subtitle}</div></td>
                        <td>${formatPHP(prod.price)}</td>
                        <td>${prod.qty}x</td>
                        <td>${formatPHP(prod.price * prod.qty)}</td>
                    </tr>
                `;
    });
}

// Cart/checkout calculations
function updateCheckoutTotals() {
    let subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
    document.getElementById('checkoutOrderTotal').textContent = formatPHP(subtotal);
    document.getElementById('checkoutSubtotal').textContent = formatPHP(subtotal);
    // Delivery fee
    let deliveryFee = 0;
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked');
    if (deliveryMethod) deliveryFee = Number(deliveryMethod.getAttribute('data-fee'));
    document.getElementById('checkoutDeliveryFee').textContent = deliveryFee ? formatPHP(deliveryFee) : 'FREE';
    // Discount
    let discount = window.checkoutDiscount || 0;
    document.getElementById('checkoutDiscount').textContent = '-' + formatPHP(discount);
    // Total payment
    let total = subtotal + deliveryFee - discount;
    document.getElementById('checkoutTotalPayment').textContent = formatPHP(total);
}

// Coupon/voucher logic (simple demo)
document.getElementById('checkoutCouponBtn').onclick = function () {
    const val = document.getElementById('checkoutCouponInput').value.trim();
    // Example: 'DISCOUNT380' gives 380 off
    if (val.toUpperCase() === 'DISCOUNT380') {
        window.checkoutDiscount = 380;
    } else {
        window.checkoutDiscount = 0;
    }
    updateCheckoutTotals();
};

// Delivery method change
document.querySelectorAll('input[name="deliveryMethod"]').forEach(radio => {
    radio.onchange = updateCheckoutTotals;
});

// Initial render
renderDeliveryAddress(deliveryInfo); // Set address from backend
renderProducts();
updateCheckoutTotals();

// Payment method selection (for backend)
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
    radio.onchange = function () {
        // You can use radio.value for backend
    };
});

// Checkout button (for backend integration)
document.getElementById('checkoutBtn').onclick = function () {
    // Collect all data for backend
    const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked').value;
    const selectedDelivery = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const coupon = document.getElementById('checkoutCouponInput').value.trim();
    // Example payload
    const payload = {
        products,
        paymentMethod: selectedPayment,
        deliveryMethod: selectedDelivery,
        coupon,
        discount: window.checkoutDiscount || 0,
        total: document.getElementById('checkoutTotalPayment').textContent,
        deliveryInfo
    };
    // TODO: Send payload to backend
    alert('Checkout payload: ' + JSON.stringify(payload, null, 2));
};