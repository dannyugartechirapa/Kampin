<?php
include_once("parametros_conexion.php");
$conexion = new mysqli($hn, $un, $pw, $db);

$opcion=$_POST['opcion'];
switch($opcion){
    case 1://para reguistrar usuarios y visulizar registros de usuarios
        $i=$_POST['idclie_u'];
        $n=$_POST['nombre_u'];
        $a=$_POST['apellido_u'];
        $c=$_POST['celular_u'];
        
        $query="INSERT INTO usuario  values ('$i','$n','$a','$c','')";//id-nombre-apellido-numer-foto
        $conexion->query($query);

       $query="SELECT * FROM usuario";
       $result=$conexion->query($query);
       $filas=$result->num_rows;//$numerp=$result->num_rows;
            for($i=0;$i<$filas;$i++){
               $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
               $registros[$i]=array($fila[0],$fila[1],$fila[2],$fila[3]);
                                           }
               echo json_encode($registros);
       //$result->close();//cierra el result pero no la conexion
   break;
    case 2://obtener datos de usuarios
       $query="SELECT * FROM cuenta";
       $result=$conexion->query($query);
       $filas=$result->num_rows;//$numerp=$result->num_rows;
            for($i=0;$i<$filas;$i++){
               $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
               $registros[$i]=array("correo"=>$fila[0],"cotraseña"=>$fila[1]);
                                   }

   echo json_encode($registros);
   
   break;


}
?>