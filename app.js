// Product Database with Placeholders for Images
const products = [
    // Regular Collection
    { id: 1, name: "Mini Heart Shape Bar", price: 10, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mini+Heart+Shape" },
    { id: 2, name: "Mini Rectangular Bar", price: 10, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mini+Rectangular" },
    { id: 3, name: "Mix Mini Rectangular Bar", price: 10, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mix+Mini+Rectangular" },
    { id: 4, name: "Tablet Bar", price: 40, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Bar" },
    { id: 5, name: "Treat Bar", price: 50, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Bar" },
    { id: 6, name: "Mix Treat Bar", price: 50, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mix+Treat+Bar" },
    { id: 7, name: "Cakesicle", price: 40, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Cakesicle" },
    { id: 8, name: "Dark/Milk/White Chocolate 100g", price: 200, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=100g+Chocolate" },
    { id: 9, name: "Mix 100g (2 Flavour)", price: 220, category: "Regular Collection", minQty: 1, image: "https://via.placeholder.com/300x200?text=Mix+100g" },
    { id: 10, name: "Customized Chocolate 100g Bar", price: 250, category: "Customized Chocolate", minQty: 1, image: "https://via.placeholder.com/300x200?text=Customized+100g+Bar" },

    // Nutty Series
    { id: 11, name: "Nutty Chocolate Bar (100g)", price: 250, category: "Nutty Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Nutty+Bar+100g" },
    { id: 12, name: "Tablet Nutty Bar", price: 45, category: "Nutty Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Nutty+Bar" },
    { id: 13, name: "Treat Nutty Bar", price: 55, category: "Nutty Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Nutty+Bar" },

    // Marble Series
    { id: 14, name: "Marble Chocolate Bar (100g)", price: 210, category: "Marble Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Marble+Bar+100g" },
    { id: 15, name: "Tablet Marble Bar", price: 40, category: "Marble Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Marble+Bar" },
    { id: 16, name: "Treat Marble Bar", price: 50, category: "Marble Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Marble+Bar" },

    // Crashed Cookies Series
    { id: 17, name: "Crashed Cookies Bar (100g)", price: 210, category: "Cookies Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Cookies+Bar+100g" },
    { id: 18, name: "Tablet Cookies Bar", price: 45, category: "Cookies Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Cookies+Bar" },
    { id: 19, name: "Treat Cookies Bar", price: 55, category: "Cookies Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Cookies+Bar" },

    // Crashed Peanut Series
    { id: 20, name: "Crashed Peanut Bar (100g)", price: 220, category: "Peanut Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Peanut+Bar+100g" },
    { id: 21, name: "Tablet Crashed Peanut Bar", price: 45, category: "Peanut Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Peanut+Bar" },
    { id: 22, name: "Treat Crashed Peanut Bar", price: 55, category: "Peanut Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Peanut+Bar" },

    // Crunchy Bite Series
    { id: 23, name: "Crunchy Bite Bar (100g)", price: 215, category: "Crunchy Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Crunchy+Bar+100g" },
    { id: 24, name: "Tablet Crunchy Bite Bar", price: 45, category: "Crunchy Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Tablet+Crunchy+Bar" },
    { id: 25, name: "Treat Crunchy Bite Bar", price: 55, category: "Crunchy Series", minQty: 1, image: "https://via.placeholder.com/300x200?text=Treat+Crunchy+Bar" },

    // Mini Delights
    { id: 26, name: "Popping Candy (Min 5 pcs)", price: 12, category: "Mini Delights", minQty: 5, image: "https://via.placeholder.com/300x200?text=Popping+Candy" },
    { id: 27, name: "KitKat (Min 5 pcs)", price: 10, category: "Mini Delights", minQty: 5, image: "https://via.placeholder.com/300x200?text=KitKat" },
    { id: 28, name: "French Mendiants", price: 30, category: "Mini Delights", minQty: 1, image: "https://via.placeholder.com/300x200?text=French+Mendiants" }
];

let selectedProduct = null;

// Categories list
const categories = ["All", "Regular Collection", "Nutty Series", "Marble Series", "Cookies Series", "Peanut Series", "Crunchy Series", "Mini Delights", "Customized Chocolate"];

// Render Category Filter Buttons
function renderCategories() {
    const container = document.getElementById('category-buttons');
    container.innerHTML = categories.map(cat => `
        <button onclick="filterProducts('${cat}')" class="px-3 py-1 bg-white border border-chocoGold/50 text-xs font-bold rounded-full text-chocoDark hover:bg-chocoGold hover:text-white transition">
            ${cat}
        </button>
    `).join('');
}

// Filter and Render Products
function filterProducts(category) {
    const list = document.getElementById('product-list');
    const filtered = category === "All" ? products : products.filter(p => p.category === category);

    list.innerHTML = filtered.map(p => `
        <div class="bg-white border border-chocoGold/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <img src="${p.image}" alt="${p.name}" class="w-full h-36 object-cover bg-chocoCream">
            <div class="p-3 flex-grow">
                <span class="text-[10px] bg-chocoCard text-chocoDark px-1.5 py-0.5 rounded font-semibold">${p.category}</span>
                <h4 class="font-bold text-sm mt-1 text-chocoDark">${p.name}</h4>
                <p class="text-base font-extrabold text-chocoDark mt-2">৳${p.price}</p>
            </div>
            <div class="p-3 pt-0">
                <button onclick="selectProduct(${p.id})" class="w-full bg-chocoDark text-chocoGold text-xs font-bold py-2 rounded hover:bg-chocoGold hover:text-chocoDark transition">
                    Select Product
                </button>
            </div>
        </div>
    `).join('');
}

function selectProduct(id) {
    selectedProduct = products.find(p => p.id === id);
    document.getElementById('selectedProductInput').value = `${selectedProduct.name} (৳${selectedProduct.price})`;
    document.getElementById('itemQty').min = selectedProduct.minQty;
    document.getElementById('itemQty').value = selectedProduct.minQty;

    // Show Bottom Sticky Cart Bar
    document.getElementById('cart-bar').classList.remove('hidden');
    document.getElementById('cart-item-name').innerText = selectedProduct.name;
    
    updateTotal();
    
    // Smooth scroll to order form
    document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' });
}

function updateTotal() {
    if (!selectedProduct) return;

    const qty = parseInt(document.getElementById('itemQty').value) || selectedProduct.minQty;
    const deliveryFee = parseInt(document.getElementById('district').value);
    const chocolateTotal = selectedProduct.price * qty;

    document.getElementById('cart-item-price').innerText = `৳${chocolateTotal}`;
    document.getElementById('deliveryFeeText').innerText = `৳${deliveryFee}`;
    document.getElementById('codBalanceText').innerText = `৳${chocolateTotal}`;
}

// Handle Order Submission via WhatsApp
function handleOrder(e) {
    e.preventDefault();

    if (!selectedProduct) {
        alert("Please select a chocolate from the menu first!");
        return;
    }

    const qty = document.getElementById('itemQty').value;
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    const deliveryFee = document.getElementById('district').value;
    const occasion = document.getElementById('occasion').value;
    const customText = document.getElementById('customText').value;
    const gateway = document.getElementById('paymentGateway').value;
    const senderNo = document.getElementById('senderNo').value;
    const trxId = document.getElementById('trxId').value;

    const totalChocolatePrice = selectedProduct.price * qty;

    // YOUR WHATSAPP NUMBER HERE (Change with your active number)
    const whatsappNumber = "8801700000000"; 

    const message = `🍫 *NEW ORDER - Choco Whimsy* 🍫%0A%0A` +
        `📦 *Item:* ${selectedProduct.name}%0A` +
        `🔢 *Quantity:* ${qty}%0A` +
        `👤 *Name:* ${name}%0A` +
        `📞 *Phone:* ${phone}%0A` +
        `📍 *Address:* ${address}%0A` +
        `🎀 *Occasion:* ${occasion}%0A` +
        `✍️ *Custom Text:* ${customText || 'N/A'}%0A%0A` +
        `💳 *Advance Paid (Delivery Fee):* ৳${deliveryFee}%0A` +
        `💵 *COD Balance Amount:* ৳${totalChocolatePrice}%0A` +
        `📲 *Gateway:* ${gateway}%0A` +
        `📱 *Sender No:* ${senderNo}%0A` +
        `🔢 *TrxID:* ${trxId}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Initial Load
renderCategories();
filterProducts('All');
     
