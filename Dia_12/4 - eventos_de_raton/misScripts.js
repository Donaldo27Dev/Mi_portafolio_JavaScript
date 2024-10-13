let menu = document.getElementById('miMenu');
let btn = document.getElementById('miBoton')

btn.addEventListener("mouseover", function(){
    menu.style.display = 'block';
});

btn.addEventListener("mouseout", function(){
    menu.style.display = 'none';
});

document.addEventListener('mousemove', function(event){
    console.log("Posicion X : " + event.clientX + " - Posicion Y: " + event.clientY);   
})
