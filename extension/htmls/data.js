const API_URL = 'https://ragnarok-uegm.onrender.com/passwords';

async function getAuthToken() {
    const result = await new Promise((resolve) => {
        browser.storage.local.get(['authToken'], resolve);
    });
    console.log('Token recuperado:', result.authToken ? '***' : 'NO TOKEN');
    return result.authToken;
}

async function getHeaders() {
    const token = await getAuthToken();
    if (!token) {
        window.location.href = './login.html';
        throw new Error('No auth token');
    }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    console.log('Headers enviados:', { 'Content-Type': 'application/json', 'Authorization': 'Bearer ***' });
    return headers;
}

export async function cargarDatos() {
    try {
        const headers = await getHeaders();
        const response = await fetch(API_URL, { headers });
        console.log('GET /passwords - Status:', response.status);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error cargando datos:', error);
        return [];
    }
}

export async function guardarDato(nuevoPassword) {
    try {
        const headers = await getHeaders();
        console.log('Enviando POST:', nuevoPassword);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(nuevoPassword)
        });
        console.log('POST /passwords - Status:', response.status);
        if (!response.ok) {
            const errorData = await response.text();
            console.error('Error response:', errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error guardando dato:', error);
        throw error;
    }
}


