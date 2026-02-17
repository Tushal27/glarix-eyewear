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



renderProducts(products);
