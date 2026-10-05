function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(product => product.name === name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
    displayCart();
}


function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty 🛒
            </p>
        `;

        cartTotal.innerHTML = "";

        return;
    }

    let total = 0;

    cart.forEach(function(product, index) {

        let subtotal = product.price * product.quantity;

        total += subtotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <h3>${product.name}</h3>

                <p>Price: ₹${product.price}</p>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

                <p>
                    Subtotal: ₹${subtotal}
                </p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    cartTotal.innerHTML = "Total: ₹" + total;
}


function increaseQuantity(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


function decreaseQuantity(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


function clearCart() {

    localStorage.removeItem("cart");

    displayCart();
}


displayCart();
let productQuantity = 1;


function increaseProduct() {

    productQuantity++;

    document.getElementById("product-quantity").innerText =
        productQuantity;
}


function decreaseProduct() {

    if (productQuantity > 1) {

        productQuantity--;

        document.getElementById("product-quantity").innerText =
            productQuantity;
    }
}


function addProductToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(
        product => product.name === "Royal Maroon Bangle"
    );

    if (existingProduct) {

        existingProduct.quantity += productQuantity;

    } else {

        cart.push({
            name: "Royal Maroon Bangle",
            price: 499,
            quantity: productQuantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Royal Maroon Bangle added to cart!");

    window.location.href = "cart.html";
}
let redBangleQuantity = 1;


function changeProductQuantity(change) {

    redBangleQuantity += change;

    if (redBangleQuantity < 1) {
        redBangleQuantity = 1;
    }

    document.getElementById("product-quantity").innerText =
        redBangleQuantity;
}


function addRedBangleToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(
        product => product.name === "Red Silk Thread Bangle"
    );

    if (existingProduct) {

        existingProduct.quantity += redBangleQuantity;

    } else {

        cart.push({
            name: "Red Silk Thread Bangle",
            price: 599,
            quantity: redBangleQuantity
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Red Silk Thread Bangle added to cart!");

    window.location.href = "cart.html";
}
let colorfulQuantity = 1;


function changeColorfulQuantity(change) {

    colorfulQuantity += change;

    if (colorfulQuantity < 1) {
        colorfulQuantity = 1;
    }

    document.getElementById("colorful-quantity").innerText =
        colorfulQuantity;
}


function addColorfulBangleToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(
        product => product.name === "Colorful Thread Bangles"
    );

    if (existingProduct) {

        existingProduct.quantity += colorfulQuantity;

    } else {

        cart.push({
            name: "Colorful Thread Bangles",
            price: 449,
            quantity: colorfulQuantity
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Colorful Thread Bangles added to cart!");

    window.location.href = "cart.html";
}
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    document.querySelector("form").reset();
}
function searchProducts() {

    let searchText =
        document.getElementById("searchInput").value.toLowerCase();

    let products =
        document.querySelectorAll(".product-card");

    let found = false;

    products.forEach(function(product) {

        let productName =
            product.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(searchText)) {

            product.style.display = "";
            found = true;

        } else {

            product.style.display = "none";
        }

    });

    let noProducts =
        document.getElementById("no-products");

    if (found) {
        noProducts.style.display = "none";
    } else {
        noProducts.style.display = "block";
    }
}
function filterProducts(category) {

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let productName =
            product.querySelector("h3").innerText.toLowerCase();

        if (category === "all") {

            product.style.display = "";

        } 
        else if (productName.includes(category)) {

            product.style.display = "";

        } 
        else {

            product.style.display = "none";

        }

    });

}
function addToWishlist(name) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(name)) {
        wishlist.push(name);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        updateWishlistCount();

        alert(name + " added to your wishlist ❤️");
    } else {
        alert(name + " is already in your wishlist ❤️");
    }
}
function displayWishlist() {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishlistItems =
        document.getElementById("wishlist-items");

    if (!wishlistItems) {
        return;
    }

    if (wishlist.length === 0) {
        wishlistItems.innerHTML =
            "<p>Your wishlist is empty ❤️</p>";
        return;
    }

    wishlistItems.innerHTML = "";

    wishlist.forEach(function(name) {

        let price = 0;
        let image = "";

        if (name === "Royal Maroon Bangle") {
            price = 499;
            image = "images/maroon-bangle.jpeg";
        }
        else if (name === "Red Silk Thread Bangle") {
            price = 599;
            image = "images/Red Silk Thread Bangle.jpeg";
        }
        else if (name === "Colorful Thread Bangles") {
            price = 449;
            image = "images/colorful-bangles.jpeg";
        }

        wishlistItems.innerHTML += `
            <div class="wishlist-item">

                <img src="${image}" alt="${name}">

                <h3>${name}</h3>

                <p>₹${price}</p>

                <div class="wishlist-quantity">
                    <button onclick="changeWishlistQuantity('${name}', -1)">−</button>

                        <span id="quantity-${name.replace(/\s/g, '-')}">1</span>

                    <button onclick="changeWishlistQuantity('${name}', 1)">+</button>
                </div>

                <button onclick="addWishlistItemToCart('${name}', ${price})">
                    🛒 Add to Cart
                </button>

                <button onclick="removeFromWishlist('${name}')">
                    Remove ❤️
                </button>

            </div>
        `;
    });
}
function removeFromWishlist(name) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter(function(item) {
        return item !== name;
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();
    updateWishlistCount();
}

displayWishlist();
function updateWishlistCount() {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishlistLink =
        document.getElementById("wishlist-link");

    if (wishlistLink) {
        wishlistLink.innerHTML =
            "❤️ Wishlist (" + wishlist.length + ")";
    }
}

updateWishlistCount();
let wishlistQuantities = {};

function changeWishlistQuantity(name, change) {

    if (!wishlistQuantities[name]) {
        wishlistQuantities[name] = 1;
    }

    wishlistQuantities[name] += change;

    if (wishlistQuantities[name] < 1) {
        wishlistQuantities[name] = 1;
    }

    let id = "quantity-" + name.replace(/\s/g, "-");

    document.getElementById(id).innerText =
        wishlistQuantities[name];
}


function addWishlistItemToCart(name, price) {

    let quantity = wishlistQuantities[name] || 1;

    for (let i = 0; i < quantity; i++) {
        addToCart(name, price);
    }

    alert(name + " added to cart 🛒");
}
function clearWishlist() {

    localStorage.removeItem("wishlist");

    displayWishlist();
    updateWishlistCount();
}
function displayCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let checkoutItems = document.getElementById("checkout-items");
    let checkoutTotal = document.getElementById("checkout-total");

    if (!checkoutItems || !checkoutTotal) {
        return;
    }

    if (cart.length === 0) {
        checkoutItems.innerHTML = "<p>Your cart is empty 🛒</p>";
        checkoutTotal.innerText = "Total: ₹0";
        return;
    }

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        checkoutItems.innerHTML += `
            <div class="checkout-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: ₹${itemTotal}</p>
            </div>
        `;
    });

    checkoutTotal.innerText = "Total: ₹" + total;
}

displayCheckout();
function placeOrder() {
    let name = document.getElementById("customer-name").value;
    let phone = document.getElementById("customer-phone").value;
    let address = document.getElementById("customer-address").value;

    if (name === "" || phone === "" || address === "") {
        alert("Please fill all delivery details.");
        return;
    }

    let orderId = "TB" + Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem("orderId", orderId);

    localStorage.removeItem("cart");

    window.location.href = "order-success.html";
}