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

usuario.innerHTML=usuarioingresado;

const IMG_TAM_1 = "200px";
const IMG_TAM_2 = "300px";
const IMG_TAM_3 = "450px";

const TXT_TAM_1 = "15px";
const TXT_TAM_2 = "20px";
const TXT_TAM_3 = "30px";

const TXT_FUENTE_1 = "monospace";
const TXT_FUENTE_2 = "cursive";
const TXT_FUENTE_3 = "fantasy";

const TXT_USUARIO_COLOR_1 = "red";
const TXT_USUARIO_COLOR_2 = "violet";
const TXT_USUARIO_COLOR_3 = "white";


function modificarPagina(colorFondo,colorTexto,colorUsuario,tamanioTexto,tipoFuente,enlaceImg,anchoImg, enlacePagina) {
cuerpoPagina.style.background=colorFondo;
cuerpoPagina.style.color=colorTexto;
usuario.style.color=colorUsuario;
cuerpoPagina.style.fontSize=tamanioTexto;1
cuerpoPagina.style.fontFamily=tipoFuente;
imagen.src=enlaceImg;
imagen.style.width=anchoImg;
enlace.href=enlacePagina;  
}

if (opcionRecibida == 1) {
modificarPagina("orange", "black", TXT_USUARIO_COLOR_1, TXT_TAM_1, TXT_FUENTE_1 , IMG_1 , IMG_TAM_1 ,  ENLACE_1);
} else if (opcionRecibida == 2) {
modificarPagina("black", "white", TXT_USUARIO_COLOR_2,TXT_TAM_2, TXT_FUENTE_2,IMG_2, IMG_TAM_2 , ENLACE_2);
} else if (opcionRecibida == 3) {
modificarPagina("pink", "green", TXT_USUARIO_COLOR_3, TXT_TAM_3, TXT_FUENTE_3, IMG_3,IMG_TAM_3 , ENLACE_3);}