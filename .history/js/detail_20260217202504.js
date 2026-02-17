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
function buyNow() {
  window.location.href = "order.html";
}
