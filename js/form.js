
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Validación del nombre (mínimo 3 caracteres)
    let nombre = document.getElementById("nombre").value;
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        event.preventDefault();
        return;
    }

    // Validación del correo electrónico
    let email = document.getElementById("email").value;
    if (!isValidEmail(email)) {
        alert("Ingrese un correo electrónico válido.");
        event.preventDefault();
        return;
    }

    // Validación de la contraseña (mínimo 6 caracteres)
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        event.preventDefault();
        return;
    }

    // Validación de la confirmación de contraseña
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        event.preventDefault();
        return;
    }
});

function isValidEmail(email) {
    // Expresión regular para validar el formato de un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}