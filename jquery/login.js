login.addEventListener('submit',function(e){
    e.preventDefault();


var datos= new FormData(login);
fetch('php/login.php',{
    method: 'POST',
    body:   datos
})
.then( res => res.json())
.then(  dato =>{ 
    if (dato >0) {
        window.location.replace("cliente.html");
    }else $('#error').html("Usuario o Comtraseña incorreto");
    console.log(dato);  
    

})
.catch( error=> console.log(error.message) )
});