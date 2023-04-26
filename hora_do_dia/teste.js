function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if(hora>=0 && hora<12){
        foto.src=("fotomanha.png")
        window.document.body.style.backgroundColor = "#e2cd9f"
    }
    else if (hora>=12 && hora<18){
        foto.src=("fototarde.png")
        window.document.body.style.backgroundColor = "#b9846f"
    }
    else{
        foto.src=("fotonoite.png")
        window.document.body.style.backgroundColor = "#515154"
    }
}