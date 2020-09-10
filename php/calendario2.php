<?php
include_once("parametros_conexion.php");
$conexion = new mysqli($hn, $un, $pw, $db);

$query="SELECT r.idreserva,c.Nombre,tr.HoraInicio,tr.HoraFinal,tr.Fecha,c.IDcliente from cliente c INNER JOIN reserva r on  r.IDcliente=c.Idcliente
INNER JOIN tiempo_reserva tr on tr.Fecha=r.Fecha "; 

$result=$conexion->query($query);
$filas=$result->num_rows;//$numerp=$result->num_rows;
for($i=0;$i<$filas;$i++){
   $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
   $registros[$i]=array($fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5]);
                               }
   echo json_encode($registros);


?>