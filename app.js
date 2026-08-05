// Database of Products
const products = [
    { id: 1, name: "Mini Heart Shape Bar", price: 10, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mini+Heart+Shape", flavours: ["Dark", "Milk", "White"], weights: ["10g"] },
    { id: 2, name: "Mini Rectangular Bar", price: 10, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mini+Rectangular", flavours: ["Dark", "Milk"], weights: ["10g"] },
    { id: 3, name: "Tablet Bar", price: 40, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Bar", flavours: ["Dark", "Milk"], weights: ["35g"] },
    { id: 4, name: "Treat Bar", price: 50, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Bar", flavours: ["Dark", "Milk"], weights: ["45g"] },
    { id: 5, name: "Cakesicle", price: 40, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Cakesicle", flavours: ["Chocolate Fudge"], weights: ["40g"] },
    { id: 6, name: "Dark/Milk/White Chocolate 100g", price: 200, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=100g+Chocolate", flavours: ["Dark", "Milk", "White"], weights: ["100g"] },
    { id: 7, name: "Customized Chocolate 100g Bar", price: 250, category: "Customized Chocolate", minQty: 1, image: "https://via.placeholder.com/300x200?text=Customized+100g+Bar", flavours: ["Dark", "Milk"], weights: ["100g"] },
    
    // Premium Collection
    { id: 8, name: "Nutty Chocolate Bar (100g)", price: 250, category: "Premium Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Nutty+Bar+100g", flavours: ["Hazelnut", "Almond"], weights: ["100g"] },
    { id: 9, name: "Marble Chocolate Bar (100g)", price: 210, category: "Premium Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Marble+Bar+100g", flavours: ["Swirl Mix"], weights: ["100g"] },
    { id: 10, name: "Crashed Cookies Bar (100g)", price: 210, category: "Premium Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Cookies+Bar+100g", flavours: ["Oreo Crunch"], weights: ["100g"] },
    { id: 11, name: "Crunchy Bite Bar (100g)", price: 215, category: "Premium Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Crunchy+Bar+100g", flavours: ["Rice Crisp"], weights: ["100g"] },
    { id: 12, name: "Popping Candy (Min 5 pcs)", price: 12, category: "Premium Collection", minQty: 5, image: "https://via.placeholder.com/300x200?text=Popping+Candy", flavours: ["Fruity Pop"], weights: ["15g"] },
    { id: 13, name: "French Mendiants", price: 30, category: "Premium Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=French+Mendiants", flavours: ["Mixed Nuts & Fruits"], weights: ["25g"] }
];

let cart = [];
let wishlist = [];
let orders = []; // Admin Order Tracking
let discountAmount = 0;

const categories = ["All", "Regular Collection", "Premium Collection", "Customized Chocolate"];

// Render Categories
function renderCategories() {
    const container = document.getElementById('category-buttons');
    container.innerHTML = categories.map(cat => `
        <button onclick="filterProducts('${cat}')" class="px-3 py-1 bg-white border border-chocoGold/50 text-xs font-bold rounded-full text-chocoDark hover:bg-chocoGold hover:text-white transition">
            ${cat}
        </button>
    `).join('');
}

// Render Products
function filterProducts(category) {
    const list = document.getElementById('product-list');
    const filtered = category === "All" ? products : products.filter(p => p.category === category);

    list.innerHTML = filtered.map(p => `
        <div class="bg-white border border-chocoGold/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between relative">
            <button onclick="toggleWishlist(${p.id})" class="absolute top-2 right-2 text-red-500 bg-white/80 p-1.5 rounded-full text-xs shadow hover:bg-white">
                <i class="${wishlist.includes(p.id) ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <img src="${p.image}" alt="${p.name}" onclick="openProductModal(${p.id})" class="w-full h-36 object-cover bg-chocoCream cursor-pointer">
            <div class="p-3 flex-grow cursor-pointer" onclick="openProductModal(${p.id})">
                <span class="text-[10px] bg-chocoBeige text-chocoDark px-1.5 py-0.5 rounded font-semibold">${p.category}</span>
                <h4 class="font-bold text-xs mt-1 text-chocoDark">${p.name}</h4>
                <p class="text-sm font-extrabold text-chocoDark mt-1">৳${p.price} ${p.minQty > 1 ? `<span class="text-[10px] text-gray-500 font-normal">(Min ${p.minQty} pcs)</span>` : ''}</p>
            </div>
            <div class="p-3 pt-0 flex gap-1">
                <button onclick="addToCart(${p.id})" class="w-full bg-chocoDark text-chocoGold text-[11px] font-bold py-1.5 rounded hover:bg-chocoGold hover:text-chocoDark transition flex justify-center items-center gap-1">
                    <i class="fas fa-plus"></i> Add
                </button>
                <button onclick="openProductModal(${p.id})" class="bg-chocoGold text-chocoDark text-[11px] font-bold px-2.5 py-1.5 rounded hover:bg-white transition">
                    View
                </button>
            </div>
        </div>
    `).join('');
}

// Search Functionality
function searchProducts() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    const list = document.getElementById('product-list');
    list.innerHTML = filtered.map(p => `
        <div class="bg-white border border-chocoGold/30 rounded-xl overflow-hidden shadow-sm p-3">
            <h4 class="font-bold text-xs text-chocoDark">${p.name}</h4>
            <p class="text-sm font-extrabold text-chocoDark">৳${p.price}</p>
            <button onclick="addToCart(${p.id})" class="mt-2 w-full bg-chocoDark text-chocoGold text-xs font-bold py-1 rounded">Add to Cart</button>
        </div>
    `).join('');
}

// Product Modal Details
function openProductModal(id) {
    const p = products.find(prod => prod.id === id);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <img src="${p.image}" class="w-full h-48 object-cover rounded-lg mb-3">
        <span class="text-xs bg-chocoBeige px-2 py-0.5 rounded font-bold text-chocoDark">${p.category}</span>
        <h3 class="text-lg font-bold text-chocoDark mt-1">${p.name}</h3>
        <p class="text-xl font-extrabold text-chocoDark my-1">৳${p.price}</p>
        <p class="text-xs text-gray-600 mb-3">Handcrafted premium chocolate prepared with pure cocoa and love.</p>
        
        <div class="space-y-2 text-xs mb-4">
            <div>
                <label class="font-bold block mb-1">Select Flavour:</label>
                <select id="modalFlavour" class="w-full border p-1.5 rounded">
                    ${p.flavours.map(f => `<option value="${f}">${f}</option>`).join('')}
                </select>
            </div>
            <div>
                <label class="font-bold block mb-1">Weight:</label>
                <select class="w-full border p-1.5 rounded">
                    ${p.weights.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>
            </div>
        </div>

        <button onclick="addToCart(${p.id}); closeProductModal();" class="w-full bg-chocoDark text-chocoGold font-bold py-2 rounded text-xs hover:bg-chocoGold hover:text-chocoDark transition">
            Add To Cart Now
        </button>
    `;
    document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

// Wishlist Logic
function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }
    document.getElementById('wishlist-count').innerText = wishlist.length;
    filterProducts('All');
}

function toggleWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    modal.classList.toggle('hidden');
    const container = document.getElementById('wishlist-container');
    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-gray-500">No wishlist items.</p>`;
        return;
    }
    container.innerHTML = wishlist.map(id => {
        const p = products.find(item => item.id === id);
        return `<div class="flex justify-between items-center border-b pb-1"><span>${p.name} (৳${p.price})</span><button onclick="addToCart(${p.id})" class="text-chocoGold font-bold">Add</button></div>`;
    }).join('');
}

// Cart Logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...product, qty: product.minQty });
    }
    updateCartUI();
}

function updateQty(productId, change) {
    const item = cart.find(p => p.id === productId);
    if (!item) return;
    item.qty += change;
    if (item.qty < item.minQty) {
        cart = cart.filter(p => p.id !== productId);
    }
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    const container = document.getElementById('cart-items-container');
    const formSection = document.getElementById('checkout-form-section');
    const couponSection = document.getElementById('coupon-section');
    const footerSummary = document.getElementById('cart-footer-summary');

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 py-6 text-xs">Your shopping cart is empty.</p>`;
        formSection.classList.add('hidden');
        couponSection.classList.add('hidden');
        footerSummary.classList.add('hidden');
        return;
    }

    formSection.classList.remove('hidden');
    couponSection.classList.remove('hidden');
    footerSummary.classList.remove('hidden');

    container.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between border-b pb-2 text-xs">
            <div>
                <h5 class="font-bold text-chocoDark">${item.name}</h5>
                <p class="text-gray-500">৳${item.price} x ${item.qty} = <span class="font-bold text-chocoDark">৳${item.price * item.qty}</span></p>
            </div>
            <div class="flex items-center gap-1">
                <button onclick="updateQty(${item.id}, -1)" class="px-2 py-0.5 bg-gray-200 rounded font-bold">-</button>
                <span class="px-1.5 font-bold">${item.qty}</span>
                <button onclick="updateQty(${item.id}, 1)" class="px-2 py-0.5 bg-gray-200 rounded font-bold">+</button>
            </div>
        </div>
    `).join('');

    calculateCartTotals();
}

function applyCoupon() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    if (code === "CHOCO10") {
        discountAmount = 50; // 50 Tk flat discount
        alert("Coupon Applied! ৳50 Discount Added.");
    } else {
        alert("Invalid Coupon Code!");
        discountAmount = 0;
    }
    calculateCartTotals();
}

function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = parseInt(document.getElementById('district').value) || 80;
    const codTotal = Math.max(0, subtotal - discountAmount);

    document.getElementById('subtotal-text').innerText = `৳${subtotal}`;
    document.getElementById('discount-text').innerText = `-৳${discountAmount}`;
    document.getElementById('delivery-text').innerText = `৳${deliveryFee}`;
    document.getElementById('cod-balance-text').innerText = `৳${codTotal}`;
}

function toggleCartModal() {
    document.getElementById('cartModal').classList.toggle('hidden');
}

// Order Submission to WhatsApp + Admin Tracking
function submitCartOrder() {
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    const deliveryFee = document.getElementById('district').value;
    const occasion = document.getElementById('occasion').value;
    const customText = document.getElementById('customText').value;
    const gateway = document.getElementById('paymentGateway').value;
    const senderNo = document.getElementById('senderNo').value;
    const trxId = document.getElementById('trxId').value;

    if (!name || !phone || !address || !senderNo || !trxId) {
        alert("Please complete all required fields (Name, Phone, Address, Sender No, TrxID)!");
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const codBalance = Math.max(0, subtotal - discountAmount);
    const itemList = cart.map(i => `${i.name} (${i.qty} pcs)`).join(', ');

    // Store in Admin Panel
    orders.push({ id: Date.now(), name, phone, address, items: itemList, advancePaid: deliveryFee, cod: codBalance, gateway, senderNo, trxId });

    const whatsappNumber = "8801700000000"; // REPLACE WITH YOUR PHONE NUMBER
    const message = `🍫 *NEW ORDER - Choco Whimsy* 🍫%0A%0A` +
        `🛒 *Items:* ${itemList}%0A` +
        `👤 *Name:* ${name}%0A` +
        `📞 *Phone:* ${phone}%0A` +
        `📍 *Address:* ${address}%0A` +
        `🎀 *Occasion:* ${occasion}%0A` +
        `✍️ *Custom Text:* ${customText || 'N/A'}%0A%0A` +
        `💳 *Advance Paid (Delivery Fee):* ৳${deliveryFee}%0A` +
        `💵 *COD Balance:* ৳${codBalance}%0A` +
        `📲 *Payment Method:* ${gateway}%0A` +
        `📱 *Sender No:* ${senderNo}%0A` +
        `🔢 *TrxID:* ${trxId}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Admin Panel
function toggleAdminPanel() {
    const modal = document.getElementById('adminModal');
    modal.classList.toggle('hidden');

    const container = document.getElementById('admin-order-list');
    if (orders.length === 0) {
        container.innerHTML = `<p class="text-gray-500 italic">No orders received in this session.</p>`;
        return;
    }

    container.innerHTML = orders.map(o => `
        <div class="border p-3 rounded-lg bg-gray-50 space-y-1">
            <div class="flex justify-between font-bold text-chocoDark"><span>Order #${o.id}</span><span class="text-green-700">TrxID: ${o.trxId}</span></div>
            <p><strong>Customer:</strong> ${o.name} (${o.phone})</p>
            <p><strong>Address:</strong> ${o.address}</p>
            <p><strong>Items:</strong> ${o.items}</p>
            <p><strong>Advance Fee Paid:</strong> ৳${o.advancePaid} via ${o.gateway} (${o.senderNo})</p>
            <p><strong>COD Balance:</strong> ৳${o.cod}</p>
        </div>
    `).join('');
}

// Initial Load
renderCategories();
filterProducts('All');
     
