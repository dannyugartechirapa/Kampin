<?php
include_once("parametros_conexion.php");
$mes= $_POST['x'];
$year=2020;

$numero_mes=array("January"=>1, "February"=>2, "March"=>3, "April"=>4, "May"=>5, "June"=>6, 
"July"=>7, "August"=>8, "September"=>9, "October"=>10, "November"=>11, "December"=>12);

$dias=cal_days_in_month(CAL_GREGORIAN,$numero_mes[$mes],$year);    
$nombreDia=date("l", mktime(0, 0, 0, $numero_mes[$mes], 1, $year));
$conexion = new mysqli($hn, $un, $pw, $db);
$boolean=false ;
$query="SELECT * FROM reserva";
  $result=$conexion->query($query);
  $k=0;
  $filas=$result->num_rows;
       for($i=0;$i<$filas;$i++){    
          $fila=$result->fetch_array(MYSQLI_NUM);
          $fe=substr($fila[6],5,2);
          if($numero_mes[$mes]==$fe){
               $p=substr($fila[6],8,2);
               if($p>=10){
                    $p=substr($fila[6],8,2);
               }else    {   $p=substr($fila[6],9,1);}
          
          $boolean=true;
          $reserva[$k]=array($fila[0],$fila[1],$fila[2],$fila[3],$fila[4],$fila[5],$p,$fila[7]);
          $k++;
                         }
                                      }

if($boolean!=false){                                           

  $query="SELECT * FROM cliente";
  $result=$conexion->query($query);
  $filas=$result->num_rows;
       for($i=0;$i<$filas;$i++){    
          $fila=$result->fetch_array(MYSQLI_NUM);
          $cliente[$i]=array($fila[0],$fila[1],$fila[2],$fila[3],$fila[4]);
                                      }
$fecha=array("days"=>$dias,"nameday"=>$nombreDia,"reserva"=>$reserva,"cliente"=>$cliente,"boolean"=>$boolean);

                              }else{
$fecha=array("days"=>$dias,"nameday"=>$nombreDia,"boolean"=>$boolean);
                                   }



echo  json_encode($fecha);     


?>
