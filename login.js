document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    var storedUsername = localStorage.getItem('registeredUsername');
    var storedPassword = localStorage.getItem('registeredPassword');
    
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'secured.html';
    } else {
        document.getElementById('error-msg').innerText = 'Invalid username or password';
    }
});
