let globalNombre = ""; //
let globalClave = "";  // Registros pre-validación
let globalCorreo = ""; //

let validacion;

let i = 3;

const usuarios = [];

function usuario(nombre, clave, correo) {
    this.nombre = nombre;
    this.clave = clave;
    this.correo = correo;
}


usuarios[0] = new usuario("SebaSinDientes", "holaC0der", "sebastian@gmail.com");                      //
usuarios[1] = new usuario("PeladoOmnipotente", "AHJahd8A782hjsdj", "elsucio@gmail.com");             // Simulo base de datos
usuarios[2] = new usuario("PatriarcaMofeta", "LóbuloFrontal007", "elcorreodelamofeta@gmail.com");                 //

alert("Bienvenido a la sección de registro.");


do {
    validacion = false;

    globalNombre = prompt("A continuación ingrese su nombre de usuario");
    globalClave = prompt("Ingrese su clave");
    globalCorreo = prompt("Ingrese su correo electrónico");
    
    validacion = usuarios.some(elem => elem.nombre == globalNombre || elem.correo == globalCorreo);
    if (validacion == true) {
        alert("ERROR: nombre de usuario y/o correo ya registrados.");
    }

    if (globalClave.length < 8 || globalClave.toLowerCase() == globalClave || globalClave.toUpperCase() == globalClave) {
        alert("ERROR: la contraseña debe tener al menos 8 caracteres, también debe incluir mayúsculas y minúsculas.");
        validacion = true;
    }

}

while(validacion==true)

usuarios[i] = new usuario(globalNombre, globalClave, globalCorreo);
console.log(usuarios[i]);
i++;







