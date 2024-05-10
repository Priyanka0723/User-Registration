document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;
    
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);
    
    window.location.href = 'login.html';
});
