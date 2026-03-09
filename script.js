function desbloquear() {
    // Sonido visual de alerta
    console.log("Acceso concedido...");
    
    // Ocultar login y mostrar expediente
    document.querySelector('.login-screen').style.display = 'none';
    document.getElementById('contenido-secreto').style.display = 'block';
}