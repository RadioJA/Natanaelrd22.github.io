// Configuración de la API
// Cambia esta URL a tu dominio de Railway
const API_BASE_URL = 'https://tu-proyecto-railway.railway.app';

// O si estás en desarrollo local:
// const API_BASE_URL = 'http://localhost:8000';

// Función para construir URLs de API
function getApiUrl(endpoint) {
    return API_BASE_URL + endpoint;
}
