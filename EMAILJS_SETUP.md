# 📧 Configuración de EmailJS

## 🚀 Instalación

EmailJS ya está instalado en el proyecto:
```bash
npm install @emailjs/browser
```

## ⚙️ Configuración

### 1. Obtener Clave Pública
1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Inicia sesión o crea una cuenta
3. Ve a **Account > API Keys**
4. Copia tu **Public Key**

### 2. Configurar el Archivo
Edita `src/config/emailjs.js` y reemplaza:
```javascript
PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE'
```
Con tu clave pública real:
```javascript
PUBLIC_KEY: 'tu_clave_publica_aqui'
```

## 📋 Templates Configurados

### 1. Formulario de Servicios
- **Service ID**: `service_ky6gp5g`
- **Template ID**: `template_se2qn9z`
- **Destino**: `contacto@stopcae.cl`

### 2. Formulario de Trabaja Con Nosotros
- **Service ID**: `service_ky6gp5g`
- **Template ID**: `template_6s814uh`
- **Destino**: `contacto@stopcae.cl`

## 🔧 Variables de los Templates

### Template de Servicios:
- `{{nombre}}` - Nombre completo
- `{{email}}` - Correo electrónico
- `{{telefono}}` - Teléfono
- `{{servicio}}` - Tipo de servicio seleccionado
- `{{status}}` - Estado del CAE (pagando/no pagando)
- `{{mensaje}}` - Mensaje opcional
- `{{time}}` - Fecha y hora de envío

### Template de Trabaja Con Nosotros:
- `{{nombre}}` - Nombre completo
- `{{email}}` - Correo electrónico
- `{{telefono}}` - Teléfono
- `{{ciudad}}` - Ciudad
- `{{especialidad}}` - Especialidad legal
- `{{experiencia}}` - Años de experiencia
- `{{motivacion}}` - Motivación para unirse
- `{{aportes}}` - Contribuciones al equipo
- `{{carta}}` - Carta de presentación
- `{{disponibilidad}}` - Disponibilidad
- `{{time}}` - Fecha y hora de envío

## ✅ Verificación

1. Configura tu clave pública
2. Envía un formulario de prueba
3. Verifica que recibas el email en `contacto@stopcae.cl`
4. Revisa la consola del navegador para errores

## 🚨 Solución de Problemas

### Error: "Configuración de EmailJS incompleta"
- Verifica que hayas configurado tu clave pública
- Asegúrate de que el archivo `emailjs.js` esté correcto

### Error: "Service not found"
- Verifica que el Service ID sea correcto
- Confirma que el servicio esté activo en EmailJS

### Error: "Template not found"
- Verifica que el Template ID sea correcto
- Confirma que el template esté publicado en EmailJS

## 📱 Próximos Pasos

1. Configurar EmailJS para el formulario de "Trabaja Con Nosotros"
2. Configurar EmailJS para el formulario del HeroSlider
3. Personalizar los templates de email según necesidades
4. Implementar notificaciones de éxito/error más elegantes
