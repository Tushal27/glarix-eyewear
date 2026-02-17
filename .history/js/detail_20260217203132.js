const id = Number(localStorage.getItem("selectedProduct"));

const product = products.find(p => p.id === id);

document.getElementById("detail-img").src = product.image;
document.getElementById("detail-name").textContent = product.name;
document.getElementById("detail-price").textContent = "₹" + product.price;
document.getElementById("detail-rating").textContent = "Rating: " + product.rating;
document.getElementById("detail-category").textContent = product.category;
document.getElementById("detail-rating").textContent =
  getStars(product.rating) + " " + product.rating;

function getStars(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return "★".repeat(fullStars) + "☆".repeat(emptyStars);
}
const relatedContainer = document.getElementById("related-products");

const related = products.filter(p =>
  p.category === product.category && p.id !== product.id
);

related.forEach(p => {
  const card = document.createElement("div");
  card.className = "related-card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h4>${p.name}</h4>
    <p>₹${p.price}</p>
  `;

  card.onclick = () => {
    localStorage.setItem("selectedProduct", p.id);
    window.location.reload();
  };

  relatedContainer.appendChild(card);
});

function buyNow() {
  window.location.href = "order.html";
}