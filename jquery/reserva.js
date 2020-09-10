$("#reservar1").submit(function (e) { 
    e.preventDefault();
        var datos = new FormData(reservar1);    
        console.log(reservar1);
    fetch('php/conexion.php',{
        method: 'POST',
        body: datos
    })
    .then( res => res.json())//sss
    .then(  dato =>{ 
        
        
       $("#reservar1")[0].reset();
    })
       .catch( error=> console.log(error.message) );
    

    });

function reserva(){
    var dataSend = new FormData();
    dataSend.append('tabla', '3');
    fetch('php/tablas.php',{
        method: 'POST',
        body: dataSend
    })
    .then( res => res.json())//sss
    .then(  dato =>{ 
        $('#idreserva').val(dato.length+1);
    })
}
        
 function usuario(){
     var dataSend = new FormData();
     dataSend.append('tabla', '2'); 
        fetch('php/tablas.php',{
            method: 'POST',
            body:dataSend  
         })
        .then( res => res.json())
        .then(  dato =>{ 
            for(var clave in dato) {
              $('#usuario').append(" <option selected value="+dato[clave][0]+">"+dato[clave][1]+"</option>");
            }          
        }) 
    }
    function cliente(){
        var dataSend = new FormData();
        dataSend.append('tabla', '1'); 
           fetch('php/tablas.php',{
               method: 'POST',
               body:dataSend  
            })
           .then( res => res.json())
           .then(  dato =>{ 
               for(var clave in dato) {
                 $('#cliente').append(" <option selected value="+dato[clave][0]+">"+dato[clave][1]+"</option>");
               }          
           }) 
       }


       


    usuario(); 
    cliente();
    reserva();
    