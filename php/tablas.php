<?php

include_once("parametros_conexion.php");
$conexion = new mysqli($hn, $un, $pw, $db);
$i = $_POST['tabla'];

switch($i){
    case 1:
     $query="SELECT * FROM cliente";
        $result=$conexion->query($query);
        $filas=$result->num_rows;//$numerp=$result->num_rows;
             for($i=0;$i<$filas;$i++){
                $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
                $registros[$i]=array($fila[0],$fila[1],$fila[2],$fila[3],$fila[4]);
                                            }
                echo json_encode($registros); 
    break;
   case 2:
    $query="SELECT * FROM usuario";
    $result=$conexion->query($query);
    $filas=$result->num_rows;//$numerp=$result->num_rows;
         for($i=0;$i<$filas;$i++){
            $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
            $registros[$i]=array($fila[0],$fila[1],$fila[2],$fila[3]);
                                        }
            echo json_encode($registros);
    
    break;
    case 3:

      $query="SELECT * FROM reserva";
     $result=$conexion->query($query);
     $filas=$result->num_rows;//$numerp=$result->num_rows;
          for($i=0;$i<$filas;$i++){
             $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
             $registros[$i]=$fila[0];
                                         }
             echo json_encode($registros);
    break;
}   
?>