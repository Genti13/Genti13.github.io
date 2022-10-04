/*CATEGORIAS*/
const categorias = document.getElementById("categorias");

const cat_web = document.getElementById("cat_web");
const cat_soft = document.getElementById("cat_soft");

/*SUB-CATEGORIAS*/
const sub_cat_web = document.getElementById("sub-cat_web");
const sub_cat_soft = document.getElementById("sub-cat_soft");

const web_one = document.getElementById("web-one");
const web_dev = document.getElementById("web-dev");
const web_unlam = document.getElementById("unlam");

const soft_unity = document.getElementById("soft-unity");

/*PROYECTOS*/
const proyectos_web_dev = document.getElementById("proyectos_web_dev");
const proyectos_web_one = document.getElementById("proyectos_web_one");
const proyectos_web_unlam = document.getElementById("proyectos_web_unlam");

const proyectos_soft_unity = document.getElementById("proyectos_soft_unity");

/*Script*/
const elements = document.getElementsByClassName("proy-container");
var activeScreen = categorias;
var lastScreen;
var path = [];

const dict = {
    "cat_web": 1,
    "cat_soft": 2,
    "web-one": 11,
    "web-dev": 12,
    "web-unlam": 13,
    "soft-unity": 21,
    "volver-cat": 0
}

for (let element of elements) {
    element.addEventListener("click", (e) => {
        let elementId = e.target.parentElement.parentElement.id;
        console.log(elementId);
        irA(dict[elementId]);
    });
}

function irA(key) {
    //let key = dict[pagina];

    switch (key) {
        case 0:
            volver();
            break;
        case 1:
            ocultarSeccion(categorias);
            mostrarSeccionFlex(sub_cat_web);
            break;
        case 2:
            ocultarSeccion(categorias);
            mostrarSeccionFlex(sub_cat_soft);
            break;
        case 11:
            ocultarSeccion(sub_cat_web);
            mostrarSeccionFlex(proyectos_web_one);
            break;
        case 12:
            ocultarSeccion(sub_cat_web);
            mostrarSeccionFlex(proyectos_web_dev);
            break;
        case 13:
            ocultarSeccion(sub_cat_web);
            mostrarSeccionFlex(proyectos_web_unlam);
            break;
        case 21:
            ocultarSeccion(sub_cat_soft);
            mostrarSeccionFlex(proyectos_soft_unity);
            break;
        default:
            break;
    }
}

function ocultarSeccion(section) {
    path.push(section);
    section.style.display = "none";
}

function mostrarSeccionFlex(section) {
    section.style.display = "flex";
    activeScreen = section;
}

function volver() {
    activeScreen.style.display = "none";

    lastScreen = path[path.length - 1];
    lastScreen.style.display = "flex";

    path.pop();

    activeScreen = lastScreen;
}











































/*
function irSubCat() {
    categorias.style.display = "none";
    sub_categorias.style.display = "flex";
}

function irProyecto() {
    sub_categorias.style.display = "none";
    proyectos.style.display = "flex";
}

function volverAtras_sub(){
    sub_categorias.style.display = "flex";
    proyectos.style.display = "none";
}

function volverAtras_cat(){
    sub_categorias.style.display = "none";
    categorias.style.display = "flex";
}*/