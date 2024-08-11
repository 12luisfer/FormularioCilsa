document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-form');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Variables de los campos
        const nombre = document.getElementById('first-name');
        const apellido = document.getElementById('surname');
        const correo = document.getElementById('user-email');
        const fecha = document.getElementById('birth-date');
        const pais = document.getElementById('residence-country');

        // Limpiar errores anteriores
        document.getElementById('error-first-name').textContent = '';
        document.getElementById('error-surname').textContent = '';
        document.getElementById('error-user-email').textContent = '';
        document.getElementById('error-birth-date').textContent = '';
        document.getElementById('error-residence-country').textContent = '';

        let hasErrors = false;

        // Validación de los campos
        if (nombre.value.trim() === '') {
            document.getElementById('error-first-name').textContent = "El nombre es obligatorio";
            hasErrors = true;
        }

        if (apellido.value.trim() === '') {
            document.getElementById('error-surname').textContent = "El apellido es obligatorio";
            hasErrors = true;
        }

        if (correo.value.trim() === '') {
            document.getElementById('error-user-email').textContent = "El correo es obligatorio";
            hasErrors = true;
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(correo.value.trim())) {
                document.getElementById('error-user-email').textContent = "Formato de correo no válido";
                hasErrors = true;
            }
        }

        const today = new Date();
        const birthDate = new Date(fecha.value);

        if (!fecha.value) {
            document.getElementById('error-birth-date').textContent = "La fecha de nacimiento es obligatoria";
            hasErrors = true;
        } else {
            if (birthDate > today) {
                document.getElementById('error-birth-date').textContent = "La fecha no puede ser futura";
                hasErrors = true;
            } else {
                let edad = today.getFullYear() - birthDate.getFullYear();
                const mes = today.getMonth() - birthDate.getMonth();
                if (mes < 0 || (mes === 0 && today.getDate() < birthDate.getDate())) {
                    edad--;
                }
                if (edad < 18) {
                    document.getElementById('error-birth-date').textContent = "Debes ser mayor de 18 años";
                    hasErrors = true;
                }
            }
        }

        if (pais.value.trim() === '') {
            document.getElementById('error-residence-country').textContent = "Debe seleccionar un país";
            hasErrors = true;
        }

        if (!hasErrors) {
            Swal.fire({
                title: "Enviado con éxito!",
                text: "Gracias por su participación.",
                icon: "success"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnHighContrast = document.getElementById('high-contrast-style');
    const btnClassic = document.getElementById('classic-style');

    btnHighContrast.addEventListener('click', function() {
        document.body.classList.add('contrast-mode');
    });

    btnClassic.addEventListener('click', function() {
        document.body.classList.remove('contrast-mode');
    });
});
