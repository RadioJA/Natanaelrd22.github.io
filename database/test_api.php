<?php
// Archivo de prueba para verificar la API

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Prueba 1: Verificar que la base de datos está disponible
require 'db_connection.php';

$tests = [
    'database_connection' => 'Verificando conexión a la base de datos...',
    'directores_table' => 'Verificando tabla de directores...',
    'locutores_table' => 'Verificando tabla de locutores...',
    'moderadores_table' => 'Verificando tabla de moderadores...'
];

$results = [];

// Test conexión a BD
try {
    $result = $pdo->query("SELECT 1");
    $results['database_connection'] = ['status' => 'OK', 'message' => 'Conexión a la base de datos exitosa'];
} catch (PDOException $e) {
    $results['database_connection'] = ['status' => 'ERROR', 'message' => $e->getMessage()];
}

// Test tablas
foreach (['directores', 'locutores', 'moderadores'] as $table) {
    try {
        $result = $pdo->query("SELECT COUNT(*) FROM $table");
        $count = $result->fetch(PDO::FETCH_NUM)[0];
        $results[$table . '_table'] = ['status' => 'OK', 'message' => "Tabla '$table' encontrada ($count registros)"];
    } catch (PDOException $e) {
        $results[$table . '_table'] = ['status' => 'ERROR', 'message' => "Error al acceder a tabla '$table': " . $e->getMessage()];
    }
}

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'API Test Endpoint',
    'timestamp' => date('Y-m-d H:i:s'),
    'tests' => $results
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>
