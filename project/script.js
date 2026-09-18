// =========================
// SHOPPING CART
// =========================

const cartButtons = document.querySelectorAll(".cart-btn");

const cartCount = document.getElementById("cartCount");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const checkoutBtn = document.getElementById("checkoutBtn");

let cart = [];

// Add product to cart
cartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = button.getAttribute("data-name");

    const productPrice = Number(button.getAttribute("data-price"));

    const existingProduct = cart.find(function (item) {
      return item.name === productName;
    });

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        name: productName,

        price: productPrice,

        quantity: 1,
      });
    }

    updateCart();
  });
});

// Update cart
function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;

  let totalQuantity = 0;

  cart.forEach(function (item, index) {
    total += item.price * item.quantity;

    totalQuantity += item.quantity;

    const cartItem = document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `

            <div>

                <h3>${item.name}</h3>

                <p>
                    Rs. ${item.price} × ${item.quantity}
                </p>

            </div>


            <button onclick="removeItem(${index})">
                Remove
            </button>

        `;

    cartItems.appendChild(cartItem);
  });

  cartCount.innerText = totalQuantity;

  cartTotal.innerText = total;
}

// Remove product
function removeItem(index) {
  cart.splice(index, 1);

  updateCart();
}

// Checkout
checkoutBtn.addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty!");

    return;
  }

  alert("Thank you for your order! Your total is Rs. " + cartTotal.innerText);
});

// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thank you! Your message has been sent.");

  contactForm.reset();
});
