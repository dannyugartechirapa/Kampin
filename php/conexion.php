<?php

$hn = 'localhost';
$db = 'diariodb';
$un = 'root';
$pw = '';


$conexion = new mysqli($hn, $un, $pw, $db);
if($conexion){
    echo "se conector";
}
?>