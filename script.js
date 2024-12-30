// Placeholder for adding JavaScript functionality

// Example: Display an alert when a user clicks on "Shop Now"
document.addEventListener("DOMContentLoaded", () => {
    const shopButton = document.querySelector(".hero .btn");
    if (shopButton) {
        shopButton.addEventListener("click", () => {
            alert("Welcome to the Shop!");
        });
    }
});
