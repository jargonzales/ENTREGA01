/* 
EL PROGRAMA CONSISTE EN EL INICIO DE SESIÓN PARA UNA TIENDA 
VIRTUAL (POR EL MOMENTO SOLO TIENE 1 ARTICULO), AL INICIAR SESIÓN
SE MOSTRARÁ UN PROMPT PARA DECIDIR SI QUEREMOS AÑADIR EL ARTICULO
AL CARRITO.
*/

const USER = "jar";
const PASSWORD = "101010";

let userSesion;
let passwordSesion;

function inicioSesion() {
    userSesion = prompt("Ingrese nombre de usuario");
    passwordSesion = prompt("Ingrese contraseña");
}

do { //Se va a ejecutar 
    inicioSesion();
    if(userSesion != USER || passwordSesion != PASSWORD) {
        alert("Usuario o contraseña incorrecto, vuelva a intentarlo");
    } else {
        alert("Usuario y contraseña correctos, bienvenido!");
    }
} while (userSesion != USER || passwordSesion != PASSWORD);





