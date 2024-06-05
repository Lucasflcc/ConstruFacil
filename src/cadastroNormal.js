document.addEventListener("DOMContentLoaded", function() {
    // Inicialize o SDK do Back4App
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = "https://parseapi.back4app.com/";

    // Adicione um evento de clique ao botão "Cadastrar"
    document.getElementById("btn-cadastrar").addEventListener("click", async function() {
        // Obtenha os valores dos campos de entrada
        const nome = document.getElementById("input-nome").value;
        const email = document.getElementById("input-email").value;
        const senha = document.getElementById("input-password").value;

        try {
            // Cria um novo objeto de usuário no Back4App
            const user = new Parse.User();
            user.set("username", email);
            user.set("email", email);
            user.set("password", senha);
            user.set("nome", nome); 

            // Salva o novo usuário no Back4App
            const newUser = await user.signUp();
            console.log("Novo usuário cadastrado:", newUser);
            
            // Redireciona o usuário para outra página
            window.location.href = "cadastroNormalSucesso.html"; // Página de sucesso de cadastro
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Erro ao cadastrar usuário. Por favor, tente novamente.");
        }
    });
});
