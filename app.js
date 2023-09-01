let imagen1 = document.getElementById("treinta");
let imagen2 = document.getElementById("treintauno");
let imagen3 = document.getElementById("treintados")
function changeImagen() {
    setTimeout(function(){
        imagen1.style.zIndex= "2";
        imagen2.style.zIndex = "1";
        imagen3.style.zIndex= "0";


        setTimeout(function(){
            imagen1.style.zIndex= "0";
            imagen2.style.zIndex = "2";
            imagen3.style.zIndex= "1";


            setTimeout(function(){
                imagen1.style.zIndex= "0";
                imagen2.style.zIndex = "1";
                imagen3.style.zIndex= "2";

                changeImagen();
               

            },700); 
    
        },700);   
       
    },700);
    
}
changeImagen();
