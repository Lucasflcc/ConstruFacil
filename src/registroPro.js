Parse.initialize("2WhME9QP4Y0qdr5D4byJBrVXSjFaA25QGuayJC2Y", "O9IUJt03yoxDx49Ve62wFLk1KDWY7aNWOjrcW8bW");
Parse.serverURL = "https://parseapi.back4app.com/";

// Event listener for form submission
document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;
    const profissao = document.getElementById('input-trabalho').value;
    const formacao = document.getElementById('input-formacao').value;
    const descricao = document.getElementById('input-descricao').value;

    // Create a new Parse User
    const user = new Parse.User();
    user.set('username', email);
    user.set('password', password);
    user.set('email', email);
    user.set('profissao', profissao);
    user.set('formacao', formacao);
    user.set('descricao', descricao);

    try {
        // Sign up the user
        await user.signUp();
        // Show success modal
        var modal = document.getElementById("successModal");
        modal.style.display = "block";
    } catch (error) {
        // Handle error
        alert('Erro ao cadastrar: ' + error.message);
    }
});

// Modal close handling
var modal = document.getElementById("successModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    window.location.href = 'index.html';  // Redirect to homepage or desired page
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.href = 'index.html';  // Redirect to homepage or desired page
    }
}

