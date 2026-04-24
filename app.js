function showMessage() {
    Swal.fire({
        title: 'Esta aplicación es super compleja',
        text: '(creeme)',
        icon: 'info'
    });
}

if (typeof document !== 'undefined') {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', function () {
            showMessage();
        });
    } else {
        console.log("ERROR: No se ha encontrado boton");
    }
}