// Funciones API para PHP Backend
// Conecta con los endpoints PHP en /database/

const API_BASE_URL = window.location.origin === 'file://' ? 'http://localhost:8000' : '';

// Para Directores
async function apiGetAll_Directores() {
    try {
        const response = await fetch(`${API_BASE_URL}/database/directores.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error al obtener directores:', error);
        return [];
    }
}

async function apiCreate_Directores(item) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/directores.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al guardar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al crear director:', error);
        throw new Error('Error al guardar: ' + error.message);
    }
}

async function apiUpdate_Directores(item) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/directores.php`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al actualizar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al actualizar director:', error);
        throw new Error('Error al actualizar: ' + error.message);
    }
}

async function apiDelete_Directores(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/directores.php`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al eliminar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al eliminar director:', error);
        throw new Error('Error al eliminar: ' + error.message);
    }
}

async function apiGetById_Directores(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/directores.php?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data || null;
    } catch (error) {
        console.error('Error al obtener director:', error);
        return null;
    }
}

// Para Locutores
async function apiGetAll_Locutores() {
    try {
        const response = await fetch(`${API_BASE_URL}/database/locutores.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error al obtener locutores:', error);
        return [];
    }
}

async function apiCreate_Locutores(item) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/locutores.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al guardar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al crear locutor:', error);
        throw new Error('Error al guardar: ' + error.message);
    }
}

async function apiUpdate_Locutores(item) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/locutores.php`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al actualizar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al actualizar locutor:', error);
        throw new Error('Error al actualizar: ' + error.message);
    }
}

async function apiDelete_Locutores(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/locutores.php`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al eliminar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al eliminar locutor:', error);
        throw new Error('Error al eliminar: ' + error.message);
    }
}

async function apiGetById_Locutores(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/locutores.php?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data || null;
    } catch (error) {
        console.error('Error al obtener locutor:', error);
        return null;
    }
}

// Para Moderadores
async function apiGetAll_Moderadores() {
    try {
        const response = await fetch(`${API_BASE_URL}/database/moderadores.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error al obtener moderadores:', error);
        return [];
    }
}

async function apiCreate_Moderadores(item) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/moderadores.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al guardar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al crear moderador:', error);
        throw new Error('Error al guardar: ' + error.message);
    }
}

async function apiUpdate_Moderadores(item) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/moderadores.php`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al actualizar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al actualizar moderador:', error);
        throw new Error('Error al actualizar: ' + error.message);
    }
}

async function apiDelete_Moderadores(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/moderadores.php`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Error al eliminar');
        }
        
        return data;
    } catch (error) {
        console.error('Error al eliminar moderador:', error);
        throw new Error('Error al eliminar: ' + error.message);
    }
}

async function apiGetById_Moderadores(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/database/moderadores.php?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data || null;
    } catch (error) {
        console.error('Error al obtener moderador:', error);
        return null;
    }
}
