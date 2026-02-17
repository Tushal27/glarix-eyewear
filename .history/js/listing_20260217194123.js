const container = document.getElementById("product-list");

function renderProducts(list) {
  container.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>⭐ ${p.rating}</p>
    `;

    card.onclick = () => {
      localStorage.setItem("selectedProduct", p.id);
      window.location.href = "detail.html";
    };

    container.appendChild(card);
  });
}

renderProducts(products);
