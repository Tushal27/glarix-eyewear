function getCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.length;
}

function updateCartDisplay() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = getCartCount();
}

function addToCart() {
  let count = getCartCount();
  count++;
  localStorage.setItem("cartCount", count);
  updateCartDisplay();
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);
function addToCart() {
  const id = Number(localStorage.getItem("selectedProduct"));

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(id);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartDisplay();
}
function goToCart() {
  window.location.href = "cart.html";
}
