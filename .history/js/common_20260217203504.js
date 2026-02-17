function getCartCount() {
  return Number(localStorage.getItem("cartCount")) || 0;
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
v