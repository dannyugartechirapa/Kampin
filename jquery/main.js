
formulario.addEventListener('submit',function(e){
e.preventDefault();
var formulario =document.getElementById('formulario');
var datos= new FormData(formulario);
fetch('php/consultas.php',{
        method: 'POST',
        body:   datos

})
.then( res => res.json())
.then(  dato =>{ 
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
        })
        .catch( error=> console.log(error.message) )
        })
//--------------------para canchas deportivas-------------------------------------------

         
 $('#calendario').click(function (e) { 
        e.preventDefault();
        $('#main').load("calendario.html") ;
             });
         
        
