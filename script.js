/* =================================
   CART
================================= */

function addToCart(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct =
        cart.find(function(item) {
            return item.name === name;
        });

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart 🛒");

    updateCartCount();
}


/* =================================
   CART COUNT
================================= */

function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let totalQuantity = 0;

    cart.forEach(function(item) {

        totalQuantity += item.quantity;

    });

    let cartLinks =
        document.querySelectorAll('a[href="cart.html"]');

    cartLinks.forEach(function(link) {

        link.innerText =
            "🛒 Cart (" + totalQuantity + ")";

    });
}


/* =================================
   DISPLAY CART
================================= */


function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) {
        return;
    }

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty 🛒</h2>
                <a href="index.html#shop" class="checkout-btn">
                    Continue Shopping
                </a>
            </div>
        `;

        cartTotal.innerHTML = "";
        return;
    }

    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h2>${item.name}</h2>
                <p>Price: ₹${item.price}</p>

                <div class="quantity-box">
                    <button onclick="decreaseQuantity(${index})">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>

                <p>Subtotal: ₹${subtotal}</p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    cartTotal.innerHTML = "Total: ₹" + total;
}

/* =================================
   INCREASE QUANTITY
================================= */

function increaseQuantity(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity += 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    updateCartCount();
}


/* =================================
   DECREASE QUANTITY
================================= */

function decreaseQuantity(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    updateCartCount();
}


/* =================================
   REMOVE FROM CART
================================= */

function removeFromCart(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    updateCartCount();
}


/* =================================
   CLEAR CART
================================= */

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();

    updateCartCount();
}


/* =================================
   WISHLIST
================================= */

function addToWishlist(name) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


    if (!wishlist.includes(name)) {

        wishlist.push(name);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        updateWishlistCount();

        alert(
            name +
            " added to your wishlist ❤️"
        );

    } else {

        alert(
            name +
            " is already in your wishlist ❤️"
        );

    }
}


/* =================================
   WISHLIST COUNT
================================= */

function updateWishlistCount() {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishlistLink =
        document.getElementById("wishlist-link");

    if (wishlistLink) {

        wishlistLink.innerHTML =
            "❤️ Wishlist (" +
            wishlist.length +
            ")";

    }
}


/* =================================
   DISPLAY WISHLIST
================================= */

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

            image =
                "images/maroon-bangle.jpeg";

        }

        else if (name === "Red Silk Thread Bangle") {

            price = 599;

            image =
                "images/red-bangle.jpeg";

        }

        else if (name === "Colorful Thread Bangles") {

            price = 449;

            image =
                "images/colorful-bangles.jpeg";

        }

        else if (name === "Golden Red Thread Bangles") {

            price = 499;

            image =
                "images/golden-red-bangles.jpeg";

        }


        wishlistItems.innerHTML += `

            <div class="wishlist-item">

                <img
                    src="${image}"
                    alt="${name}"
                >

                <h3>
                    ${name}
                </h3>

                <p>
                    ₹${price}
                </p>

                <button
                    onclick="addWishlistItemToCart('${name}', ${price})"
                >
                    🛒 Add to Cart
                </button>

                <button
                    onclick="removeFromWishlist('${name}')"
                >
                    Remove ❤️
                </button>

            </div>

        `;
    });
}


/* =================================
   REMOVE FROM WISHLIST
================================= */

function removeFromWishlist(name) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


    wishlist =
        wishlist.filter(function(item) {

            return item !== name;

        });


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    displayWishlist();

    updateWishlistCount();
}


/* =================================
   ADD WISHLIST ITEM TO CART
================================= */

function addWishlistItemToCart(
    name,
    price
) {

    addToCart(name, price);

}


/* =================================
   CLEAR WISHLIST
================================= */

function clearWishlist() {

    localStorage.removeItem("wishlist");

    displayWishlist();

    updateWishlistCount();
}


/* =================================
   SEARCH + FILTER
================================= */

let selectedCategory = "all";


function searchProducts() {

    applyProductFilters();

}


function filterProducts(category) {

    selectedCategory = category;

    applyProductFilters();

}


function applyProductFilters() {

    let searchInput =
        document.getElementById("searchInput");

    let searchText = "";

    if (searchInput) {

        searchText =
            searchInput.value
                .toLowerCase()
                .trim();

    }


    let products =
        document.querySelectorAll(".product-card");

    let found = false;


    products.forEach(function(product) {

        let productName =
            product
                .querySelector("h3")
                .innerText
                .toLowerCase();


        let productCategory =
            product.dataset.category;


        let matchesSearch =
            productName.includes(searchText);


        let matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        if (
            matchesSearch &&
            matchesCategory
        ) {

            product.style.display = "";

            found = true;

        } else {

            product.style.display = "none";

        }

    });


    let noProducts =
        document.getElementById("no-products");


    if (noProducts) {

        if (found) {

            noProducts.style.display =
                "none";

        } else {

            noProducts.style.display =
                "block";

        }

    }

}


/* =================================
   CHECKOUT
================================= */

function displayCheckout() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    let checkoutItems =
        document.getElementById(
            "checkout-items"
        );

    let checkoutTotal =
        document.getElementById(
            "checkout-total"
        );


    if (
        !checkoutItems ||
        !checkoutTotal
    ) {

        return;

    }


    if (cart.length === 0) {

        checkoutItems.innerHTML =
            "<p>Your cart is empty 🛒</p>";

        checkoutTotal.innerText =
            "Total: ₹0";

        return;

    }


    checkoutItems.innerHTML = "";

    let total = 0;


    cart.forEach(function(item) {

        let itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    Price: ₹${item.price}
                </p>

                <p>
                    Quantity: ${item.quantity}
                </p>

                <p>
                    Subtotal: ₹${itemTotal}
                </p>

            </div>

        `;

    });


    checkoutTotal.innerText =
        "Total: ₹" + total;
}


/* =================================
   PLACE ORDER
================================= */

function placeOrder() {

    let name =
        document.getElementById(
            "customer-name"
        ).value.trim();


    let phone =
        document.getElementById(
            "customer-phone"
        ).value.trim();


    let address =
        document.getElementById(
            "customer-address"
        ).value.trim();


    if (
        name === "" ||
        phone === "" ||
        address === ""
    ) {

        alert(
            "Please fill all delivery details."
        );

        return;

    }


    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    let orderId =
        "TB" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    localStorage.setItem(
        "orderId",
        orderId
    );


    localStorage.removeItem(
        "cart"
    );


    window.location.href =
        "order-success.html";
}


/* =================================
   PAGE LOAD
================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        updateWishlistCount();

        displayCart();

        displayWishlist();

        displayCheckout();

    }
);