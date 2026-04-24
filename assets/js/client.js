function showMessage() {
    Swal.fire({
        title: 'Esta aplicación es super compleja',
        text: '(creeme)',
        icon: 'info'
    });
}

const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', showMessage);
} else {
    console.log("ERROR: No se ha encontrado boton");
}
