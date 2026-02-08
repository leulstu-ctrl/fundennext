// EthioApple - Frontend Logic

// Product Data
const products = [
    // iPhone 16 Series (New)
    {
        id: 101,
        name: "iPhone 16 Pro Max",
        category: "iPhone",
        originalPrice: 187500,
        price: 75000,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 102,
        name: "iPhone 16 Pro",
        category: "iPhone",
        originalPrice: 162500,
        price: 65000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 103,
        name: "iPhone 16 Plus",
        category: "iPhone",
        originalPrice: 137500,
        price: 55000,
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 104,
        name: "iPhone 16",
        category: "iPhone",
        originalPrice: 112500,
        price: 45000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop"
    },

    // Existing iPhone 15 Series
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "iPhone",
        originalPrice: 145000,
        price: 58000,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        category: "iPhone",
        originalPrice: 125000,
        price: 50000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "iPhone 15",
        category: "iPhone",
        originalPrice: 95000,
        price: 38000,
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "iPhone 14 Pro Max",
        category: "iPhone",
        originalPrice: 110000,
        price: 44000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "iPhone 13",
        category: "iPhone",
        originalPrice: 65000,
        price: 26000,
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=800&auto=format&fit=crop"
    },

    // Mac Products (Added Mac Studio & Display)
    {
        id: 105,
        name: "Mac Studio M2 Ultra",
        category: "Mac",
        originalPrice: 225000,
        price: 90000,
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 106,
        name: "Studio Display",
        category: "Mac",
        originalPrice: 100000,
        price: 40000,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "MacBook Pro 16 M3",
        category: "Mac",
        originalPrice: 210000,
        price: 84000,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "MacBook Air 15 M2",
        category: "Mac",
        originalPrice: 130000,
        price: 52000,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "MacBook Air 13 M1",
        category: "Mac",
        originalPrice: 85000,
        price: 34000,
        image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=800&auto=format&fit=crop"
    },

    // iPads
    {
        id: 9,
        name: "iPad Pro 12.9",
        category: "iPad",
        originalPrice: 105000,
        price: 42000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "iPad Air 5",
        category: "iPad",
        originalPrice: 55000,
        price: 22000,
        image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 11,
        name: "iPad Mini 6",
        category: "iPad",
        originalPrice: 45000,
        price: 18000,
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop"
    },

    // Watches
    {
        id: 12,
        name: "Apple Watch Ultra 2",
        category: "Watch",
        originalPrice: 75000,
        price: 30000,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 13,
        name: "Apple Watch Series 9",
        category: "Watch",
        originalPrice: 45000,
        price: 18000,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 14,
        name: "Apple Watch SE",
        category: "Watch",
        originalPrice: 28000,
        price: 11200,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
    },

    // AirPods
    {
        id: 15,
        name: "AirPods Pro 2",
        category: "AirPods",
        originalPrice: 22000,
        price: 8800,
        image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 16,
        name: "AirPods 3",
        category: "AirPods",
        originalPrice: 16000,
        price: 6400,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 17,
        name: "AirPods Max",
        category: "AirPods",
        originalPrice: 52000,
        price: 20800,
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800&auto=format&fit=crop"
    },

    // Accessories (Fixed Images & Added MagSafe)
    {
        id: 18,
        name: "HomePod Mini",
        category: "Home",
        originalPrice: 9500,
        price: 3800,
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 19,
        name: "Apple TV 4K",
        category: "TV",
        originalPrice: 12000,
        price: 4800,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 20,
        name: "AirTag (4 Pack)",
        category: "Accessories",
        originalPrice: 8500,
        price: 3400,
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 107,
        name: "MagSafe Charger",
        category: "Accessories",
        originalPrice: 6000,
        price: 2400,
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop"
    }
];

// Cart State
let cart = [];

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartPanel = document.getElementById('cart-panel');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productGrid = document.getElementById('product-grid');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutModal = document.getElementById('checkout-modal');
const cancelCheckoutBtn = document.getElementById('cancel-checkout');
const paymentForm = document.getElementById('payment-form');
const successModal = document.getElementById('success-modal');
const whatsappLink = document.getElementById('whatsapp-link');
const telegramLink = document.getElementById('telegram-link');
const closeSuccessBtn = document.getElementById('close-success');
const checkoutSummary = document.getElementById('checkout-summary');
const checkoutTotal = document.getElementById('checkout-total');


// Initialize
function init() {
    renderProducts();

    // Event Listeners
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', openCheckout);
    cancelCheckoutBtn.addEventListener('click', closeCheckout);
    paymentForm.addEventListener('submit', handlePayment);
    closeSuccessBtn.addEventListener('click', closeSuccess);

    // Close Modals on click outside
    window.onclick = function(event) {
        if (event.target == cartModal) {
            toggleCart();
        }
        if (event.target == checkoutModal) {
            closeCheckout();
        }
        if (event.target == successModal) {
            closeSuccess();
        }
    }
}

// Render Products
function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
            <div class="h-48 overflow-hidden relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
                <div class="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    ${product.category}
                </div>
                <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                    60% OFF
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-bold text-gray-800 mb-2 truncate">${product.name}</h3>
                <div class="flex flex-col mb-4">
                    <span class="text-gray-400 text-sm line-through">${formatPrice(product.originalPrice)}</span>
                    <div class="flex justify-between items-center">
                        <span class="text-red-600 font-bold text-xl">${formatPrice(product.price)}</span>
                        <button onclick="addToCart(event, ${product.id})" class="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button onclick="addToCart(event, ${product.id})" class="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Format Price
function formatPrice(price) {
    return new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB' }).format(price).replace('ETB', 'ETB ');
}

// Add to Cart
function addToCart(event, productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();

    // Show feedback (optional)
    const btn = event.target.closest('button');
    if(btn) {
        const originalText = btn.innerHTML;
        if(btn.tagName === 'BUTTON' && btn.classList.contains('w-full')) {
            btn.innerHTML = 'Added! <i class="fas fa-check"></i>';
            setTimeout(() => { btn.innerHTML = originalText }, 1000);
        }
    }
}

// Toggle Cart Modal
function toggleCart() {
    const isHidden = cartModal.classList.contains('hidden');

    if (isHidden) {
        cartModal.classList.remove('hidden');
        // Small delay to allow display:block to apply before transition
        setTimeout(() => {
            cartPanel.classList.remove('translate-x-full');
        }, 10);
    } else {
        cartPanel.classList.add('translate-x-full');
        setTimeout(() => {
            cartModal.classList.add('hidden');
        }, 300); // Match transition duration
    }
}

function openCheckout() {
    // Close cart properly
    cartPanel.classList.add('translate-x-full');
    setTimeout(() => {
        cartModal.classList.add('hidden');
        checkoutModal.classList.remove('hidden');
        updateCheckoutSummary();
    }, 300);
}

function closeCheckout() {
    checkoutModal.classList.add('hidden');
}

function handlePayment(e) {
    e.preventDefault();
    // Simulate processing
    const confirmBtn = e.target.querySelector('button[type="submit"]');
    const originalText = confirmBtn.innerHTML;

    confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    confirmBtn.disabled = true;

    setTimeout(() => {
        confirmBtn.innerHTML = originalText;
        confirmBtn.disabled = false;
        closeCheckout();
        showSuccess();
    }, 1500);
}

function showSuccess() {
    successModal.classList.remove('hidden');

    // Calculate total and prepare message
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
    const formattedTotal = formatPrice(total);

    // Get customer details
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('customer-address').value;

    const message = `Hello, I would like to confirm my payment for:\n${orderDetails}\n\nTotal: ${formattedTotal}\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nI have attached the payment screenshot.`;
    const encodedMessage = encodeURIComponent(message);

    whatsappLink.href = `https://wa.me/251944200770?text=${encodedMessage}`;
    telegramLink.href = `https://t.me/+251944200770`;
}

function closeSuccess() {
    successModal.classList.add('hidden');
    // Clear cart
    cart = [];
    updateCartUI();
}

function updateCheckoutSummary() {
    if (cart.length === 0) {
        checkoutSummary.innerHTML = '<p class="text-center italic">Your cart is empty.</p>';
        checkoutTotal.innerText = formatPrice(0);
        return;
    }

    checkoutSummary.innerHTML = cart.map(item => `
        <div class="flex justify-between border-b border-gray-100 py-1">
            <span class="text-gray-800">${item.quantity}x ${item.name}</span>
            <span class="font-medium">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.innerText = formatPrice(total);
}

function updateCartUI() {
    // Update count
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalCount;
    cartCount.classList.toggle('hidden', totalCount === 0);

    // Update items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center mt-10">Your cart is empty.</p>';
        checkoutBtn.disabled = true;
        cartTotalElement.innerText = formatPrice(0);
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                <div class="flex-1">
                    <h4 class="font-bold text-sm text-gray-800">${item.name}</h4>
                    <p class="text-blue-600 font-semibold text-sm">${formatPrice(item.price)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 bg-white border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                    <span class="text-sm font-bold w-4 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 bg-white border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalElement.innerText = formatPrice(total);
        checkoutBtn.disabled = false;
    }
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}


// Start
document.addEventListener('DOMContentLoaded', init);
