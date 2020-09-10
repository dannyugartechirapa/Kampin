$('#formulario').submit(function (e) { 
var formulario =document.getElementById('formulario');
e.preventDefault();
var datos= new FormData(formulario);
fetch('php/conexion.php',{
        method: 'POST',
        body:   datos
})
.then( res => res.json())
.then(  dato =>{ 
    datos_usuario();
        //Recorremos el array con un for each
        for(var clave in dato) {//numero de registros
            var tabla=$('<tr/>',{'id':'tr'+clave});//filas
             $('#tb').append(tabla);
            for(columnas in dato[clave]) {//para recorer los datos
                var columna=$('<td/>',{'id':'td'+clave} );//columnas
                var tbtx1= document.createTextNode(dato[clave][columnas]);
                columna.append(tbtx1);
                $('#tr'+clave).append(columna);
                                        }
                                    }
        autocompletado(clave);         
        })
     .catch( error=> console.log(error.message) )
        })
          

$('#modificar_c').submit(function (e) { 
         e.preventDefault();
        var datos = new FormData(modificar_c);   
        console.log(modificar_c);
        fetch('php/conexion.php',{
            method: 'POST',
            body: datos
        })
       
          .then( res => res.json())
        .then(  dato =>{
        
            verClientes();
            $("#modificar_c")[0].reset();
         })   
 
         
});

$('#eliminar_c').submit(function (e) { 
    e.preventDefault();
    var datos = new FormData(eliminar_c);   
        console.log(modificar_c);
        fetch('php/conexion.php',{
            method: 'POST',
            body: datos
        })
    
        .then( res => res.json())
        .then(  dato =>{
        verClientes();
        $("#eliminar_c")[0].reset();
         }) 
    
} );

function verClientes(){
     datos_usuario();
     var dataSend = new FormData();
     dataSend.append('tabla', '1');
     
fetch('php/tablas.php',{
        method: 'POST',
        body:dataSend  //JSON.stringify({
})
.then( res => res.json())
.then(  dato =>{ 
        for(var clave in dato) {//numero de registros
            var tabla=$('<tr/>',{'id':'tr'+clave});//filas
             $('#tb').append(tabla);
            for(columnas in dato[clave]) {//para recorer los datos
                var columna=$('<td/>',{'id':'td'+clave} );//columnas
                var tbtx1= document.createTextNode(dato[clave][columnas]);
                columna.append(tbtx1);
                $('#tr'+clave).append(columna);
                                        }
                                    }     
        autocompletado(clave);
        
        })
     .catch( error=> console.log(error.message) )
 }       


 function datos_usuario(){
    $("#tb").empty();
    $('#tb').append('<tr id="tra"> </tr>');
    $('#tra').append('<th >Id del cliente</th>');
    $('#tra').append('<th >Nombre</th>');
    $('#tra').append('<th >Apellido</th>');
    $('#tra').append('<th >Celular</th>');
    $('#tra').append('<th >DNI</th>');
 }
 
 function autocompletado(numero){
    var num=parseInt(numero);
    num=num+2;
    $('#idclie_u').val(num);
 }
 function session(){
    window.location.replace("php/loginout.php");
}

 
 
 



verClientes();//para que se vea una vez










        
$("#registro_cliente").click(function (e) { 
    e.preventDefault();
    $('#main').load("index.html") ;
        });
$("#registro_usuario").click(function (e) { 
    e.preventDefault();
    $('#main').load("usuario.html") ;
        });
$("#reserva").click(function (e) { 
    e.preventDefault();
    $('#main').load("reserva.html") ;
        });      
$("#calendario").click(function (e) { 
    e.preventDefault();
    $('#main').load("calendario.html") ;
        });   
         
        
