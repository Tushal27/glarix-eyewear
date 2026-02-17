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
      <p class="rating">
      ${getStars(p.rating)} ${p.rating}
</p>

    `;

    card.onclick = () => {
      localStorage.setItem("selectedProduct", p.id);
      window.location.href = "detail.html";
    };

    container.appendChild(card);
  });
}
function getStars(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return "★".repeat(fullStars) + "☆".repeat(emptyStars);
}
document.querySelectorAll(".dropdown").forEach(drop => {

  const selected = drop.querySelector(".dropdown-selected");
  const options = drop.querySelector(".dropdown-options");

  selected.addEventListener("click", () => {
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });

  options.querySelectorAll("div").forEach(opt => {
    opt.addEventListener("click", () => {
      selected.textContent = opt.textContent;
      options.style.display = "none";

      handleDropdown(opt.dataset.value);
    });
  });

});
function handleDropdown(value) {

  let list = [...products];

  if (value === "priceLow") {
    list.sort((a, b) => a.price - b.price);
  }

  if (value === "priceHigh") {
    list.sort((a, b) => b.price - a.price);
  }

  if (value === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  if (value === "Full Rim" || value === "Half Rim" || value === "Rimless") {
    list = list.filter(p => p.category === value);
  }

  if (value === "All") {
    list = products;
  }
  if (value==="Kids"){
    list=products.filter(p=>p.category===value);
    
  }

  renderProducts(list);
}




renderProducts(products);
