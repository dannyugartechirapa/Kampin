function dartabla(a){
    var dayname=["Monday","Tuesday" ,"Wednesday","Thursday","Friday","Saturday","Sunday"];
    var formData = new FormData();
    formData.append('x', a);
    
    fetch('php/calendario.php',{
        method: 'POST',
        body: formData 
    
    })
    .then( res => res.json())//sss
    .then(  dato =>{ 
        
        for (var j= 0;j<7; j++){ 
            if(dayname[j]==dato.nameday) var  pp=j;
         }
        var cont=1;
        var contf=1;
        for(var i=0;i<6;i++){ 
            var fila=$('<tr/>',{'id':'tr'+i});
             $('#table').append(fila);
             for(var p=0;p<7;p++){
                 if(pp==p){     
                    var columnas=$('<td/>',{'id':'td'+contf});
                    var texto= document.createTextNode(cont);
                    cont++;
                    columnas.append(texto);
                    $('#tr'+i).append(columnas);
                    pp++;
                    contf++;
                 }else{
                    var columnas=$('<td/>',{'id':'td'+p});
                    var texto= document.createTextNode("-");
                    columnas.append(texto);
                    $('#tr'+i).append(columnas);
                 }      
                if(cont>dato.days) break;    
            }
            pp=0;
            if(cont>dato.days) break;      
        }
        $('#mostrar_r').empty();
        if(dato.boolean==true){
            var codigo = new Array();
            var f=0;
        for(var i=0;i<dato.reserva.length;i++){
            
            for(var j=0;j<dato.cliente.length;j++){
                
                if(dato.reserva[i][4]==dato.cliente[j][0]) {
                    codigo[f]=dato.cliente[j][0];
                    $('#td'+dato.reserva[i][6]).append("<br>"+dato.cliente[j][1]);
                    f++;
                 
                }
                
            }
        }
        
        let unicos = Array.from(new Set(codigo))
        mostrarR(unicos);
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

    function mostrarR(codigo){
        $('#mostrar_r').empty();
        $('#mostrar_r').append('<tr id="tr"> </tr>');
        $('#tr').append('<th >ID de reserva </th>');
        $('#tr').append('<th >Nombre del cliente</th>');
        $('#tr').append('<th >Hora de Inicio</th>');
        $('#tr').append('<th >Hora de Final</th>');
        $('#tr').append('<th >Fecha</th>');

        fetch('php/calendario2.php',{
            method: 'POST'
        })
        .then( res => res.json())//sss
        .then(  dato =>{
            
            var g=0;
            for (let i = 0; i < codigo.length; i++) {
                for (let j = 0; j < dato.length; j++) {
                   
                    if (codigo[i]==dato[j][5]) {
                        $('#mostrar_r').append('<tr id='+g+'> </tr>');                
                        $('#'+g).append('<th >'+dato[j][0]+'</th>');
                        $('#'+g).append('<th >'+dato[j][1]+'</th>');
                        $('#'+g).append('<th >'+dato[j][2]+'</th>');
                        $('#'+g).append('<th >'+dato[j][3]+'</th>');
                        $('#'+g).append('<th >'+dato[j][4]+'</th>');
                        
                        g++;
                    }
                    
                    
                }
                
            }


         }) 

          

    }

    $('#modificar_r').submit(function (e) { 
        e.preventDefault();
        var datos = new FormData(modificar_r);   
        
        fetch('php/conexion.php',{
            method: 'POST',
            body: datos
        })
        .then( res => res.json())//sss
        .then(  dato =>{
            
            a();
        })
        
    });
    $('#eliminar_r').submit(function (e) { 
        e.preventDefault();
        var datos = new FormData(eliminar_r);   
        console.log(eliminar_r);
        fetch('php/conexion.php',{
            method: 'POST',
            body: datos
        })
        .then( res => res.text())//sss
        .then(  dato =>{
           // console.log(dato);
            a();
        })
        
    });




    $('#select').change(a);    
    a();//una vez se ejecuta ;
    
    
    