let boton=document.getElementById("boton")
let nombre=document.getElementById("nombre")
let cedula=document.getElementById("cedula")
let fecha=document.getElementById("fecha")

//detectando evento de click en el boton del formulario
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let errores=[]

    let valorNombre=nombre.value
    if(!valorNombre){
        nombre.classList.add("is-invalid")
        errores.push("EL NOMBRE ES OBLIGATORIO")
    }

    let valorCedula=cedula.value
    if(!valorCedula){
        cedula.classList.add("is-invalid")
        errores.push("LA CEDULA ES OBLIGATORIA")
    }

    let valorFecha=fecha.value
    if(!valorFecha){
        fecha.classList.add("is-invalid")
        errores.push("LA FECHA ES OBLIGATORIA")
    }
    if(errores.length>0){

        Swal.fire({
            icon: 'error',
            title: 'Vuelve a intentarlo',
            text: 'Revisa que tienes campos por llenar',
            
          })

    }else{

        let datos={
            nombreUsuario:valorNombre,
            cedulaUsuario:valorCedula,
            fecha:valorFecha
        
        }

        let reservas
        if(JSON.parse(localStorage.getItem("memoria"))){
            reservas=JSON.parse(localStorage.getItem("memoria"))
        }else{
            reservas=[]
        }
        
        //almacenando datos en memoria
        let reserva=datos
        reservas.push(reserva)
        localStorage.setItem("memoria",JSON.stringify(reservas))

  
        Swal.fire(
            'Listo!',
            'RESERVA CONFIRMADA',
            'Recuerda estar 20 minutos antes'
          )

    }

})