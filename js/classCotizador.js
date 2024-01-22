 /*class Cotizador {
    constructor(inmueble, valorFijo, M2) {
        this.inmueble = inmueble
        this.valorFijo = valorFijo
        this.M2 = M2 
    }

    
    obtenerCotizacion() {
        return this.inmueble.factor * this.valorFijo * this.M2
    } 
}

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