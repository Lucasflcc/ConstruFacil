document.addEventListener("DOMContentLoaded", function() {
    // Inicialize o SDK do Back4App
    Parse.initialize("Dt5qsyIvBF3KLozPDHVAnhdjxS8CBIIW6BI6chcM", "OjADQ3UETevvC09vTTCYX2MqKM7Wx6gwLW4JLMuE");
    Parse.serverURL = "https://parseapi.back4app.com/";

    // Adicione um evento de submissão ao formulário de cadastro
    document.getElementById("cadastroForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Obtenha os valores dos campos de entrada
        const email = document.getElementById("input-email").value;
        // Obtenha outros valores de entrada conforme necessário

        try {
            // Crie um novo objeto de usuário no Back4App
            const user = new Parse.User();
            user.set("username", email); // Use o email como nome de usuário
            user.set("email", email);
            // Defina outros campos de usuário conforme necessário

            // Salve o novo usuário no Back4App
            const newUser = await user.signUp();
            console.log("Novo usuário cadastrado:", newUser);
            
            // Redirecione o usuário para outra página (opcional)
            window.location.href = "cadastroTrabalhadorSucesso.html"; // Página de sucesso de cadastro
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Erro ao cadastrar usuário. Por favor, tente novamente.");
        }
    });

    const orcamentoInput = document.getElementById('input-orcamento');

    orcamentoInput.addEventListener('input', formatCurrency);

    // Inicializa com o formato correto
    formatCurrency.call(orcamentoInput);
});

function formatCurrency() {
    let value = this.value.replace(/[^\d,]/g, '').replace(',', '.');
    let num = parseFloat(value); 

    if (!isNaN(num)) {
        this.value = `R$ ${num.toFixed(2).replace('.', ',')}`;
    } else {
        this.value = "R$ 0,00";
    }
}
