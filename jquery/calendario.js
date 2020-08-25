

function dartabla(a){

var dayname=["Monday","Tuesday" ,"Wednesday","Thursday","Friday","Saturday","Sunday"];
var formData = new FormData();
formData.append('x', a);

fetch('calendario.php',{
    method: 'POST',
    body: formData 

})
.then( res => res.json())//sss
.then(  dato =>{ 

    for (var j= 0;j<7; j++){ 
        if(dayname[j]==dato.nameday) pp=j;
     }
    cont=1;
    for(var i=0;i<6;i++){ 
        var fila=$('<tr/>',{'id':'tr'+i});
         $('#table').append(fila);
         for(var p=0;p<7;p++){
             if(pp==p){
                var columnas=$('<td/>',{'id':'th'+p});
                var texto= document.createTextNode(cont);
                cont++;
                columnas.append(texto);
                $('#tr'+i).append(columnas);
                pp++;
             }else{
                var columnas=$('<td/>',{'id':'th'+p});
                var texto= document.createTextNode("-");
                columnas.append(texto);
                $('#tr'+i).append(columnas);
             }      
            if(cont>dato.days) break;    
        }
        pp=0;
        if(cont>dato.days) break;      
    }
    })
    .catch( error=> console.log(error.message) );
}

var a =function () { 
        //e.preventDefault()
        var a=$('#select').val();  
        $('#table').empty();//borra los valores de la tabla para los nuevos valores 
        $('#table').append('<tr id="tra"> </tr>');
        $('#tra').append('<th >lunes </th>');
        $('#tra').append('<th >Martes </th>');
        $('#tra').append('<th >Miercoles </th>');
        $('#tra').append('<th >jueves </th>');
        $('#tra').append('<th >Viernes </th>');
        $('#tra').append('<th >Sabado </th>');
        $('#tra').append('<th >Domingo </th>');
        dartabla(a);  
      
};
$('#select').change(a);    
a();//una vez se ejecuta ;
