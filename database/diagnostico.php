<?php
// ARCHIVO DE DIAGNÓSTICO - Verifica que la BD funciona desde cualquier dispositivo
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Información del sistema
$diagnostico = [
    'timestamp' => date('Y-m-d H:i:s'),
    'dispositivo' => [
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown',
        'user_agent' => substr($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown', 0, 100),
        'hostname' => gethostname() ?? 'Unknown'
    ],
    'servidor' => [
        'php_version' => phpversion(),
        'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
        'document_root' => $_SERVER['DOCUMENT_ROOT'] ?? 'Unknown'
    ],
    'variables_entorno' => [
        'MYSQLHOST' => !empty(getenv('MYSQLHOST')) ? '✅ Configurado' : '❌ No configurado',
        'MYSQLDATABASE' => !empty(getenv('MYSQLDATABASE')) ? '✅ Configurado' : '❌ No configurado',
        'MYSQLUSER' => !empty(getenv('MYSQLUSER')) ? '✅ Configurado' : '❌ No configurado',
        'MYSQLPASSWORD' => !empty(getenv('MYSQLPASSWORD')) ? '✅ Configurado' : '❌ No configurado',
        'MYSQLPORT' => !empty(getenv('MYSQLPORT')) ? '✅ Configurado' : '❌ No configurado'
    ]
];

// Prueba de conexión a BD
require 'db_connection.php';

try {
    // Test 1: Conexión
    $test_conexion = $pdo->query("SELECT 1 as test");
    $diagnostico['base_datos']['conexion'] = '✅ Conectado';
    
    // Test 2: Tabla directores
    $count_directores = $pdo->query("SELECT COUNT(*) as count FROM directores")->fetch();
    $diagnostico['base_datos']['directores'] = [
        'status' => '✅ Tabla encontrada',
        'registros' => (int)$count_directores['count']
    ];
    
    // Test 3: Tabla locutores
    $count_locutores = $pdo->query("SELECT COUNT(*) as count FROM locutores")->fetch();
    $diagnostico['base_datos']['locutores'] = [
        'status' => '✅ Tabla encontrada',
        'registros' => (int)$count_locutores['count']
    ];
    
    // Test 4: Tabla moderadores
    $count_moderadores = $pdo->query("SELECT COUNT(*) as count FROM moderadores")->fetch();
    $diagnostico['base_datos']['moderadores'] = [
        'status' => '✅ Tabla encontrada',
        'registros' => (int)$count_moderadores['count']
    ];
    
    $diagnostico['estado'] = '✅ TODO ESTÁ FUNCIONANDO CORRECTAMENTE';
    
} catch (Exception $e) {
    $diagnostico['estado'] = '❌ ERROR: ' . $e->getMessage();
    $diagnostico['base_datos']['error'] = $e->getMessage();
}

http_response_code(200);
echo json_encode($diagnostico, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>
