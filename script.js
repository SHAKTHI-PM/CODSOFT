let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product added to cart!");
}
function checkout() {
    let payment = confirm("Proceed to Payment?");
    
    if(payment) {
        alert("Payment Successful!");
    } else {
        alert("Payment Cancelled!");
    }
}
function searchProduct() {
    let product = document.getElementById("search").value;
    alert("Searching for: " + product);
}