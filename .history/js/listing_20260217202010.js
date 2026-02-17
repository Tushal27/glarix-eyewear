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
let currentCategory = "All";
let currentSort = null;

function handleDropdown(value) {

  if (value === "All" || value === "Full Rim" || value === "Half Rim" || value === "Rimless") {
    currentCategory = value;
  } else {
    currentSort = value;
  }

  applyFiltersAndSort();
}

function applyFiltersAndSort() {

  let list = [...products];

  if (currentCategory !== "All") {
    list = list.filter(p => p.category === currentCategory);
  }

  if (currentSort === "priceLow") {
    list.sort((a, b) => a.price - b.price);
  }

  if (currentSort === "priceHigh") {
    list.sort((a, b) => b.price - a.price);
  }

  if (currentSort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(list);
}



renderProducts(products);
