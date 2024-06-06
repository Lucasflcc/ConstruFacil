document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    try {
        const user = await Parse.User.logIn(email, password);
        alert('Login successful!');
        window.location.href = 'index.html'; 
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
