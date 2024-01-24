/*class Cotizador {
    constructor(vehiculo, valor, año) {
        this.vehiculo = vehiculo
        this.valor = valor
        this.año = año
    }*/



/*function mostrarSaludo(){
let nombre = prompt("Ingresa tu nombre")
console.log("bienvenido, nombre")}*/

class Cotizador {
    constructor (vehiculo,año){
    this.vehiculo = vehiculo
    this.año = año 
  }
   obtenerCotizacion() {
    return this.vehiculo.precio

   }
   
}