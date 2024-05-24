/* Escribe un fragmento de código donde se aprecie la diferencia de usar los tipos de variables var,let y const */
 
var mensajeV="mensajeV";
function mostrarMensajeV() {
    mensajeV="Mensaje dentro de Bloque";
}
mostrarMensajeV();
console.log(mensajeV);
 
/* **************************************************************************** */
 
let mensajeL="mensaje distinto al bloque"
function mostrarMensajeL() {
   let mensajeL="Mensaje dentro de Bloque";
   console.log(mensajeL);
}
mostrarMensajeL();
console.log("Mensaje fuera => " +mensajeL);
 
/* **************************************************************************** */
 
const IVA=1.21;
precioAlfombra= 70 * IVA;
console.log("El precio final es " +precioAlfombra);