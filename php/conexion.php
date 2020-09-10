<?php
include_once("parametros_conexion.php");
$conexion = new mysqli($hn, $un, $pw, $db);
$opcion=$_POST['opcion'];
switch($opcion){
    case 1://para cliente
        $i=$_POST['idclie_u'];
        $n=$_POST['nombre_u'];
        $a=$_POST['apellido_u'];
        $c=$_POST['celular_u'];
        
        $query="INSERT INTO cliente  values ('$i','$n','$a','$c','')";//id-nombre-apellido-numer-foto
        $conexion->query($query);

       $query="SELECT * FROM cliente";
       $result=$conexion->query($query);
       $filas=$result->num_rows;//$numerp=$result->num_rows;
            for($i=0;$i<$filas;$i++){
               $fila=$result->fetch_array(MYSQLI_NUM);//para  obtener los datos por columnas
               $registros[$i]=array($fila[0],$fila[1],$fila[2],$fila[3],$fila[4]);
                                           }
               echo json_encode($registros);
       //$result->close();//cierra el result pero no la conexion
   break;
    case 2://para usuario
      $idu=$_POST['idusuario'];
      $nomu=$_POST['nombre'];
      $apelu=$_POST['apellido'];
      $celu=$_POST['celular'];
      //$fotu=$_POST['foto'];
       $query="INSERT INTO  usuario value ('$idu','$nomu','$apelu','$celu','','')";
       $conexion->query($query);
       //echo json_encode($query);

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
     
     //tiempo_reserva
     $idcanchat=$_POST['idcancha'];
     $ncanchat=(int)$_POST['ncancha'];
     $hiniciot=$_POST['hinicio'];
     $hfinalt=$_POST['hfinal'];
     $totalhorast=(float)$_POST['totalhoras'];
     $fechat=$_POST['fechat'];
     $costot=(float)$_POST['costo'];

     $query="INSERT INTO tiempo_reserva value (' $hiniciot','$hfinalt','$fechat','$costot','$totalhorast','$idcanchat','$ncanchat')";
     $q1=$query;
      $conexion->query($query);     
     
      //para reserva
     $idreserva=$_POST['idreserva'];
     $idusuarior=$_POST['idusuario'];
     $idclienter=$_POST['idcliente'];
     $adelantor=(float)$_POST['adelanto'];
     $faltar=(float)$_POST['falta'];
     $totalr=(float)$_POST['total'];
     $cancelador=$_POST['cancelado'];
     $fechar=$_POST['fechat'];

     $p=substr($fechar,0,10);
     $l=substr($fechar,11,5);
     $fecharr=$p." ".$l.":00";//fecha sin t
     
     
     $query="INSERT INTO reserva value ('$idreserva','$adelantor','$totalr','$cancelador','$idclienter','$idusuarior','$fecharr','$faltar') ";
     $q2=$query;
     $conexion->query($query);  

     
     
        
 
    break;
  
    case 4://PARA MODIFCAR usuario
      $codigo=$_POST['codigo'];
      $opcion_c=$_POST['opcion_u'];
      $cambiar="'".$_POST['cambiar']."'";
      $query="UPDATE usuario set $opcion_c=$cambiar where usuario.IDusuarios=$codigo";
      $conexion->query($query);
      echo json_encode("");
      //echo json_encode($query);
    break;

    case 5://PARA MODIFCAR clientes
        $codigo=$_POST['codigo'];
        $opcion_c=$_POST['opcion_c'];
        $cambiar="'".$_POST['cambiar']."'";
        $query="UPDATE cliente set $opcion_c=$cambiar where cliente.IDcliente=$codigo";
        $conexion->query($query);
        echo json_encode("");



    break;

    case 6://PARA MODIFCAR reserva
      $reserva=$_POST['reserva'];
      $horainicial="' ".$_POST['horainicial'].".00'";
      $horafinal= "'".$_POST['horafinal'].".00'";
      $query="UPDATE reserva r inner join tiempo_reserva tr on r.Fecha=tr.Fecha set
            tr.HoraInicio =$horainicial,tr.HoraFinal=$horafinal WHERE r.idreserva=$reserva " ;
            $result=$conexion->query($query);
            echo json_encode("se modifico ");      
            
            
    break;
          
    
    case 7://  PARA ELIMINAR reserva
      $idreserva=$_POST['idreserva'];
        $query="DELETE r,tr FROM reserva r inner join tiempo_reserva tr on r.Fecha=tr.Fecha 
                where r.idreserva=$idreserva" ;
        $conexion->query($query);
        //echo json_encode($query);      
    break;

    case 8://ELIMINAR CLIENTE
      $codigo=$_POST['codigo'];
      $query="DELETE from cliente where cliente.IDcliente=$codigo";
      $conexion->query($query);
      echo json_encode("");
    break;

    case 9://ELIMINAR USUARIOS
      $codigo=$_POST['codigo'];
      $query="DELETE from usuario where usuario.IDusuarios=$codigo";
      $conexion->query($query);
      echo json_encode("");
    break;
  
  }


?>