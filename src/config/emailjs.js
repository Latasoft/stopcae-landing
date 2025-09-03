// EmailJS Configuration
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_ky6gp5g',
    TEMPLATE_ID_SERVICIOS: 'template_se2qn9z',
    TEMPLATE_ID_TRABAJA: 'template_6s814uh',
    PUBLIC_KEY: 'ZhqRi1llNHjjg2MDC', // Clave pública configurada
    EMAIL_DESTINATION: 'contacto@stopcae.cl'
};

// Función para validar la configuración
export function validateEmailJSConfig() {
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.error('⚠️ IMPORTANTE: Debes configurar tu PUBLIC_KEY de EmailJS en src/config/emailjs.js');
        return false;
    }
    return true;
}
