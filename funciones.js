const imagen=document.querySelector("#imagen");
const titulo=document.querySelector("#titulo");
const enlace=document.querySelector("#enlace");
const cuerpoPagina=document.querySelector("body");
const usuario=document.querySelector("#usuario");

const IMG_1= "https://farm2.staticflickr.com/1946/30689176647_85b85d05b6_o.jpg";
const IMG_2= "https://th.bing.com/th/id/R.ac1c7d7e59d5b850bae34c78fd3c5e03?rik=NlNnal3x3hP%2fPQ&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2fsizes%2f1200x675%2f1510859056-2017-11-15t233345z153790425mt1vrtp0jvnohnrtrvrtp4variety-entertainment-film-news.jpg&ehk=28scI0qA6BNAbJALQX8mCTEdybnQzKrppbtn38vsJUA%3d&risl=&pid=ImgRaw&r=0";
const IMG_3= "https://th.bing.com/th/id/OIP.R6pKTMzCl1nqn2UwLmcLswHaEL?pid=ImgDet&rs=1";

const ENLACE_1="https://erick-c3.github.io/Trayecto-de-Programador-/html/material-clase.html";
const ENLACE_2="https://discord.com";
const ENLACE_3="https://es.stackoverflow.com";


let opcionRecibida = prompt("Ingrese una opcion estetica: 1, 2 o 3");
let usuarioingresado= prompt ("Ingrese su nombre de usuario");

function modificarPagina(colorFondo,colorTexto,colorUsuario,tamanioTexto,tipoFuente,enlaceImg,anchoImg, enlacePagina) {
cuerpoPagina.style.background=colorFondo;
cuerpoPagina.style.color=colorTexto;
usuario.style.color=colorUsuario;
cuerpoPagina.style.fontSize=tamanioTexto;1
titulo.style.fontFamily=tipoFuente;
imagen.src=enlaceImg;
imagen.style.width=anchoImg;
enlace.href=enlacePagina;  
}

1
if (opcionRecibida == 1) {
    modificarPagina("orange", "black", "red", "15px", "monospace" , IMG_1 , "200px" ,  ENLACE_1);
} else if (opcionRecibida == 2) {
    modificarPagina("black", "white", "purple", "20px", "cursive",IMG_2, "300px" , ENLACE_2);
} else if (opcionRecibida == 3) {
    modificarPagina("pink", "green", "white", "30px", "fantasía", IMG_3,"450px" , ENLACE_3);
}