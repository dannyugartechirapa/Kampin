
    $("#usuario").submit(function (e) { 
        e.preventDefault();
        var datos = new FormData(usuario);    
    fetch('php/conexion.php',{
        method: 'POST',
        body: datos
    })
    .then( res => res.json())//sss
    .then(  dato =>{ 
        console.log(dato);
       tabla(dato);
    })
      //  .catch( error=> console.log(error.message) );
    

    });

    $('#modificar_u').submit(function (e) { 
        e.preventDefault();
       var datos = new FormData(modificar_u);   
       console.log(modificar_u);
       fetch('php/conexion.php',{
           method: 'POST',
           body: datos
       }) 
      .then( res => res.text())
       .then(  dato =>{
        mostrarUsuario();
        $("#modificar_u")[0].reset();
        })   
        
   
});
$('#eliminar_u').submit(function (e) { 
    e.preventDefault();
   var datos = new FormData(eliminar_u);   
   console.log(eliminar_u);
    fetch('php/conexion.php',{
       method: 'POST',
       body: datos
   }) 
    .then( res => res.json())
   .then(  dato =>{
    
    mostrarUsuario();
    $("#eliminar_u")[0].reset();
       
    })  
    

});

function mostrarUsuario(){
    var dataSend = new FormData();
    dataSend.append('tabla', '2');
    fetch('php/tablas.php',{
        method: 'POST',
        body: dataSend
    })
    .then( res => res.json())//sss
    .then(  dato =>{ 
       tabla(dato);
    })
        .catch( error=> console.log(error.message) );

}
    

function tabla(dato){
    $('#tb1').empty();//borra los valores de la tabla para los nuevos valores 
    $('#tb1').append('<tr id="tr"> </tr>');
    $('#tr').append('<th >ID de usuario</th>');
    $('#tr').append('<th >Nombre</th>');
    $('#tr').append('<th >Apellido</th>');
    $('#tr').append('<th >Numero de celular</th>');
    
    for(var clave in dato) {//numero de registros
        var tabla=$('<tr/>',{'id':'tr'+clave});//filas
         $('#tb1').append(tabla);
        for(columnas in dato[clave]) {//para recorer los datos
            var columna=$('<td/>',{'id':'td'+clave} );//columnas
            var tbtx1= document.createTextNode(dato[clave][columnas]);
            columna.append(tbtx1);
            $('#tr'+clave).append(columna);
                                    }
                                }  
     autocompletado(clave);
 
}


function autocompletado(numero){
    var num=parseInt(numero);
    num=num+2;
    $('#idusuario').val(num);
 }


mostrarUsuario();







