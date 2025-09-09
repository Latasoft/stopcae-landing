// EmailJS Configuration
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_fzy350f',
    TEMPLATE_ID_SERVICIOS: 'template_2ba7wlj',
    TEMPLATE_ID_TRABAJA: 'template_gxl2hcj',
    PUBLIC_KEY: 'Q5Qu6LefKc48raJFh', // Clave pública configurada
};

// Función para validar la configuración
export function validateEmailJSConfig() {
    if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.error('⚠️ IMPORTANTE: Debes configurar tu PUBLIC_KEY de EmailJS en src/config/emailjs.js');
        return false;
    }
    return true;
}

// Ejemplo de uso de console.log para depuración
export function sendDataToEmailJS(formData) {
    // Aquí iría la lógica para enviar los datos a EmailJS

    console.log('Datos enviados a EmailJS:', formData);
}
