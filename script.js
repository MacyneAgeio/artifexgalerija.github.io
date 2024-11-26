
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration Successfully Submitted!');
    
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('continue', (event) => {
    event.preventDefault();
    alert('Registration Successfully Submitted!');
    alert('login Successfully Submitted!');
    
});
