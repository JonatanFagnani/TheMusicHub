// function loginUser() {
//   let usuarioIngresado = prompt(
//     "Bienvenido a TheMusichub!\nIngrese su nombre de usuario:"
//   );
//   let usuario = usuarioIngresado.toLowerCase();
//   while (usuario != "emiliano") {
//     usuario = prompt("Usuario no encontrado.\nIntente nuevamente:");
//   }
// }

// function loginPassword() {
//   let passwordIngresada = prompt("Por favor, ingrese su contraseña:");
//   let password = passwordIngresada.toLowerCase();
//   if (password != "emiliano") {
//     password = prompt("Contraseña incorrecta.\nIntente nuevamente:");
//   } else {
//     alert("Has ingresado correctamente!.");
//   }
// }

// function mailUser() {
//   let usuarioIngresado = prompt(
//     "Mientras tanto, dejanos tu mail para informarte sobre las novedades.\nTu mail nunca sonó mejor:"
//   );
// }

// loginUser();
// loginPassword();
// mailUser();

// alert(
//   "Muy pronto vas a descubir algo nuevo e inspirador!, tus oidos lo agradeceran.\nNos vemos pronto!."
// );

confirm("Bienvenido a TheMusicHub!\nVamos a crear tu usuario!");

class User {
  constructor(nombre, edad, mail) {
    this.nombre = nombre;
    this.edad = edad;
    this.mail = mail;
  }

  mostrarDatos() {
    alert("Usuario creado correctamente " + this.nombre + "!");
  }
  agregarAmigo() {
    confirm("Tienes una solicitud de amistad de " + this.nombre + "!");
  }
}

const user1 = new User(
  prompt("Ingresa tu nombre de Usuario"),
  prompt("Ingresa tu edad"),
  prompt("Ingresa tu dirección de mail")
);

const user2 = new User("Jonatan", 32, "jlfagnani@hotmail.com");

user1.mostrarDatos();
user2.agregarAmigo();
