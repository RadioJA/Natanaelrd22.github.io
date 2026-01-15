# 🚀 INSTRUCCIONES PARA RAILWAY - SOLUCIÓN FINAL DEL ERROR JSON

## ⚠️ Problema
El servidor estaba devolviendo HTML en lugar de JSON cuando se intentaba acceder a los endpoints API.

```
Error: Unexpected token '<', "<html><he"... is not valid JSON
```

## 🔧 Cambios Realizados

### 1. **Nuevos Handlers GET en PHP** (CRÍTICO)
Los archivos PHP ahora soportan **GET, POST, PUT, DELETE**:

```
/database/directores.php
/database/locutores.php
/database/moderadores.php
```

**Antes:** Solo soportaban POST → Si hacías GET, devolvía HTML
**Ahora:** GET devuelve JSON con lista de registros

### 2. **Mejor Manejo de Errores en JavaScript**
- Detecta si la respuesta es HTML (error del servidor)
- Muestra el error exacto en la consola
- Fallback graceful si falla

### 3. **Base de Datos Correctamente Inicializada**
Los archivos PHP usan PDO para conectarse a MySQL. Requiere:
- `MYSQLHOST` environment variable
- `MYSQLDATABASE` environment variable  
- `MYSQLUSER` environment variable
- `MYSQLPASSWORD` environment variable
- `MYSQLPORT` environment variable

## 🚀 QUÉ HACER EN RAILWAY

### Paso 1: Redeploy
Railway **automáticamente** debería detectar los cambios en GitHub y hacer redeploy. Si no:

1. Ve a tu proyecto en https://railway.app
2. Haz clic en tu servicio
3. Busca el botón "Redeploy" o "Trigger Deploy"
4. Espera a que termine (5-10 minutos)

### Paso 2: Verificar Variables de Entorno
Asegúrate que Railway tenga estas variables configuradas:

```
MYSQLHOST=<host>
MYSQLDATABASE=<nombre_bd>
MYSQLUSER=<usuario>
MYSQLPASSWORD=<contraseña>
MYSQLPORT=3306
```

Para verificar/configurar:
1. Railway Dashboard → Tu Proyecto
2. PostgreSQL/MySQL Plugin → Variables
3. Verifica que tenga las 5 variables arriba

### Paso 3: Ver Logs (Si hay error)
```bash
railway logs
```

O en el Dashboard:
1. Railway Dashboard → Tu Proyecto
2. Logs → Busca errors

## 🧪 Cómo Verificar que Funciona

### Opción 1: Browser DevTools
1. Abre https://tu-dominio.railway.app
2. Presiona F12 (DevTools)
3. Abre la pestaña "Console"
4. Pega esto:
```javascript
fetch('https://tu-dominio.railway.app/database/test_api.php')
  .then(r => r.json())
  .then(d => console.log('✅ API OK:', d))
  .catch(e => console.error('❌ API ERROR:', e))
```

### Opción 2: Línea de Comando
```bash
curl https://tu-dominio.railway.app/database/test_api.php
```

Deberías ver JSON como respuesta, NO HTML.

### Opción 3: Probar los Formularios
1. Ve a "Registro de Directores"
2. Llena el formulario
3. Haz clic en "Guardar"
4. Deberías ver "Registro agregado exitosamente"
5. Si ves el error JSON, revisa los logs de Railway

## 📋 Checklist de Deploy

- [ ] Los cambios están en GitHub (`git push`)
- [ ] Railway está redeployando (revisa el estado)
- [ ] Base de datos está iniciada y accesible
- [ ] Variables de entorno están configuradas
- [ ] El servidor está corriendo en `php -S 0.0.0.0:$PORT -t .`
- [ ] `/database/test_api.php` devuelve JSON válido
- [ ] Los formularios guardan sin errores

## 🐛 Debugging si Aún Hay Errores

### Error: "Cannot connect to database"
- Verifica que MySQL/PostgreSQL esté corriendo en Railway
- Revisa las credenciales en variables de entorno
- Mira los logs: `railway logs`

### Error: "Unexpected token '<'"
- Significa que el servidor devolvió HTML en lugar de JSON
- Revisa si los archivos PHP se cargaron correctamente
- Asegúrate de que hizo redeploy (no es caché vieja)

### Error: "CORS error"
- Los headers CORS están configurados en:
  - `database/db_connection.php` (headers globales)
  - `.htaccess` (si usas Apache)

## 📊 Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `database/directores.php` | ✅ Agregué handler GET |
| `database/locutores.php` | ✅ Agregué handler GET |
| `database/moderadores.php` | ✅ Agregué handler GET |
| `js/firebase-api.js` | ✅ Mejor manejo de errores |
| `panel/*.html` | ✅ Sin referencias a Firebase |

## ✅ Resultado Esperado

Después del redeploy de Railway:

1. ✅ Los formularios de registro guardan sin errores
2. ✅ Los registros se muestran en las tablas
3. ✅ Puedes editar y eliminar registros
4. ✅ La consola del navegador NO tiene errores

## 🎯 Próximas Mejoras (Opcional)

- [ ] Agregar validación en el frontend
- [ ] Implementar paginación en GET
- [ ] Agregar búsqueda/filtros
- [ ] Mejorar logs de errores
- [ ] Agregar autenticación

---

**Última actualización:** 15 de Enero, 2026  
**Versión:** 2.0 (Con soporte GET)
