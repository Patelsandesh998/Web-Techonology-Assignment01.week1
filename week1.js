
document.getElementById('homeLink').addEventListener('click', function() {
    window.location.href = 'home.html';
});

document.getElementById('loginLink').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('RegisterLink').addEventListener('click', function() {
    window.location.href = 'register.html';
});

document.getElementById('catalogueLink').addEventListener('click', function() {
    window.location.href = 'catalogue.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const username = loginForm.elements['username'].value.trim();
        const password = loginForm.elements['password'].value.trim();

        
        if (username === '' || password === '') {
            loginMessage.textContent = 'Please enter both username and password.';
            loginMessage.style.color = 'red';
        } else {
    
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
            loginForm.reset(); 
        }
    });
});

/*-------------------- Registration form ---------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // You can add your validation and form submission logic here
        alert('Form submitted successfully!');
        registrationForm.reset(); // Reset the form
    });
});

/*----------------Catalogue--------------- */

let cart = [];

        function addToCart(bookName) {
            cart.push(bookName);
            alert(`"${bookName}" added to cart!`);
            console.log('Cart:', cart);
        }


/*---------------CSE-------------------*/
document.getElementById('calculateTotal').addEventListener('click', function() {
    let book = document.getElementById('book').value;
    let quantity = parseInt(document.getElementById('quantity').value);
    let unitPrice = 500; // Assuming the unit price of each book is 500
    let shippingCost = 1000; // Shipping cost
    
    let totalCost = unitPrice * quantity + shippingCost;
    
    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost}`;
});


/*-------------------ECE-------------*/