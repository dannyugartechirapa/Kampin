<?php

include_once("parametros_conexion.php");
$conexion = new mysqli($hn, $un, $pw, $db);

$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];

    if (isset($contraseña) & isset($usuario)) {

    $query = "SELECT * FROM usuario WHERE nombre='$usuario' AND passwords='$contraseña' ";
    $result = $conexion->query($query);
    if ($result->num_rows >0) {
        session_start();
        $_SESSION['usuario']=$usuario;       
    }
    echo json_encode($result->num_rows);

    }
?>