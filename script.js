/* 
EL PROGRAMA CONSISTE EN EL INICIO DE SESIÓN PARA UNA TIENDA 
VIRTUAL (POR EL MOMENTO SOLO TIENE 1 ARTICULO), AL INICIAR SESIÓN
SE MOSTRARÁ UN PROMPT PARA DECIDIR SI QUEREMOS AÑADIR EL ARTICULO
AL CARRITO.
*/

const USER = "jar";
const PASSWORD = "101010";
const CANTIDAD_ARTICULO = 1;

let userSesion;
let passwordSesion;
let mensaje;
let mensajeAgregar;

function inicioSesion() {
    userSesion = prompt("Ingrese nombre de usuario");
    passwordSesion = prompt("Ingrese contraseña");
}

do { //Se va a ejecutar hasta que el usuario confirme su cuenta
    inicioSesion();
    if(userSesion != USER || passwordSesion != PASSWORD) { //En caso alguno de los campos sea incorrecto no permitirá iniciar sesion
        alert("Usuario o contraseña incorrecto, vuelva a intentarlo");
    } else {
        alert("Usuario y contraseña correctos, bienvenido!");
    }
} while (userSesion != USER || passwordSesion != PASSWORD);

mensaje = prompt("Solo contamos con el articulo \"Casaca\". Desea continuar?" + 
    "Escriba SI o NO");

if(mensaje.toLowerCase() === "si") {
    do {
        mensajeAgregar = prompt("Desea agregar 1 casaca (Quedan " + CANTIDAD_ARTICULO + " disponibles)." +
            "Escriba Si o No");
        if(mensajeAgregar.toLowerCase() === "si") {
            CANTIDAD_ARTICULO--;
        }
    } while(CANTIDAD_ARTICULO > 0 && mensajeAgregar.toLowerCase() === "si")
    if(CANTIDAD_ARTICULO === 0) {
        alert("Producto agotado. Vuelva a iniciar sesión");
    }
} else if (mensaje.toLowerCase() === "no") {
    alert("Vuelva pronto!")
}



