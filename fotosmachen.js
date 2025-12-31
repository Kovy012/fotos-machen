document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const photo = document.getElementById('photo').value;
    const quantity = document.getElementById('quantity').value;

    // Here you would typically send this data to your server
    console.log("Order Details:", { name, email, photo, quantity });
    
    // Show a confirmation message
    document.getElementById('message').innerText = `Thank you ${name}! Your order for ${quantity} of ${photo} has been placed.`;
    
    // Optionally reset the form
    this.reset();
});