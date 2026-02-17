const container = document.getElementById("cart-items");
const buyBtn = document.querySelector(".buy-btn");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
  buyBtn.disabled = true;
} else {

  cart.forEach(id => {
    const product = products.find(p => p.id === id);

    const card = document.createElement("div");
    card.className = "cart-card";

    card.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;

    container.appendChild(card);
  });

}

function checkout() {
  window.location.href = "order.html";
}
