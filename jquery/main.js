var formulario =document.getElementById('formulario');

formulario.addEventListener('submit',function(e){
e.preventDefault();
var datos= new FormData(formulario);
fetch('consultas.php',{
        method: 'POST',
        body:   datos

})
.then( res => res.json())
.then(  dato =>console.log(dato) )
.catch(error => console.log(error.message) )

})
