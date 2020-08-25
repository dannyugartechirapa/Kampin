<?php
$mes= $_POST['x'];
$year=2020;

$numero_mes=array("January"=>1, "February"=>2, "March"=>3, "April"=>4, "May"=>5, "June"=>6, 
"July"=>7, "August"=>8, "September"=>9, "October"=>10, "November"=>11, "December"=>12);

     $dias=cal_days_in_month(CAL_GREGORIAN,$numero_mes[$mes],$year);    
     $nombreDia=date("l", mktime(0, 0, 0, $numero_mes[$mes], 1, $year));
     $fecha=array("days"=>$dias,"nameday"=>$nombreDia);

     echo  json_encode($fecha);     

 
?>
