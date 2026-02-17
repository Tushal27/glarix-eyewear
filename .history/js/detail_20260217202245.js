const id = Number(localStorage.getItem("selectedProduct"));

const product = products.find(p => p.id === id);

document.getElementById("detail-img").src = product.image;
document.getElementById("detail-name").textContent = product.name;
document.getElementById("detail-price").textContent = "₹" + product.price;
document.getElementById("detail-rating").textContent = "Rating: " + product.rating;
document.getElementById("detail-category").textContent = product.category;
document.getElementById("detail-rating").textContent =
  getStars(product.rating) + " " + product.rating;


function buyNow() {
  window.location.href = "order.html";
}
