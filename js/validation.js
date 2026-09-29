const descripciones = {
    terapia: "La Terapia Neural regula el sistema nervioso mediante anestésicos locales.",
    quiropraxia: "La Quiropraxia corrige desalineaciones de la columna y mejora la movilidad.",
    fisioterapia: "La Fisioterapia ayuda a recuperar la función muscular y articular.",
    nutricion: "La Nutrición y Dietética Terapéutica diseña planes alimenticios para mejorar la salud."
};

document.querySelectorAll('.especialidad-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const clave = this.dataset.especialidad;
        document.getElementById('descripcionEspecialidad').textContent = descripciones[clave];
    });
});

const form = document.getElementById('formRegistro');
const campos = form.querySelectorAll('input');

function validarCampo(campo) {
    let valido = campo.checkValidity();

    if (campo.id === 'confirmarPassword') {
        const pass = document.getElementById('password').value;
        if (campo.value !== pass) {
            campo.setCustomValidity('Las contraseñas no coinciden');
            valido = false;
        } else {
            campo.setCustomValidity('');
        }
    }

    if (valido) {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
    } else {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
    }
    return valido;
}

campos.forEach(campo => {
    campo.addEventListener('blur', () => validarCampo(campo));
    campo.addEventListener('input', () => {
        if (campo.classList.contains('is-invalid')) validarCampo(campo);
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let todoValido = true;
    campos.forEach(campo => {
        if (!validarCampo(campo)) todoValido = false;
    });

    const mensaje = document.getElementById('mensajeRegistro');
    if (todoValido) {
        mensaje.innerHTML = '<div class="alert alert-success">Registro exitoso.</div>';
        form.reset();
        campos.forEach(c => c.classList.remove('is-valid', 'is-invalid'));
    } else {
        mensaje.innerHTML = '<div class="alert alert-danger">Corrija los errores del formulario.</div>';
    }
});