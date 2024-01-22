/*const valorFijo = 230.81      //Si varío el valorFijo, se alterará el importe del seguro
let tipoInmueble = {}         //objeto vacío. Se llena con el inmueble seleccionado
let M2 = 0                    //Solo cotizamos seguros para inmuebles de entre 20 y 500 metros 2

const inmuebles = [{ codigo: 1, tipo: 'Vivienda familiar', factor: 1.12 },
                   { codigo: 2, tipo: 'Local comercial', factor: 1.44 },
                   { codigo: 3, tipo: 'Oficina / Consultorio', factor: 1.75 }]

function iniciarCotizacion() {
    let codigo = prompt("Ingresa el código del inmueble a cotizar:")
    tipoInmueble = inmuebles.find((inmueble)=> inmueble.codigo === parseInt(codigo))

    if (tipoInmueble === undefined) {
        alert("⛔️ No se reconoce el código ingresado.")
        return 
    }

    M2 = prompt("Ingresa los metros 2 del inmueble:")
    M2 = parseInt(M2)       // mínimo 20 m2 máximo 500 m2

    if (M2 < 20 || M2 > 500) {
        alert("⛔️ Solo cotizamos inmuebles de 20 a 500 m2.")
        return 
    }

    const cotizadorInmueble = new Cotizador(tipoInmueble, valorFijo, M2)
    let cuotaMensual = cotizadorInmueble.obtenerCotizacion()

    console.log("✅ Valor de la cuota mensual: $", cuotaMensual.toLocaleString("es-AR"))
    console.log("✅ Te enviaremos un email desde info@coticasa.com para la contratación.")
}/*

/*const mostrarSaludo = ()=> {
    let nombre = prompt("Ingresa tu nombre:")
    console.log("Bienvenido", nombre) 
}

function retornarNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido
}*/

//const valorFijo = 3.40
let tipoVehiculo = {}
//let añoFabricacion = 0


const auto = [
    { marca: "Toyota", modelo: "Corolla", precio: 25000, añoFabricacion: 2023 },
    { marca: "Honda", modelo: "Civic", precio: 23000, añoFabricacion: 2022 },
    { marca: "Ford", modelo: "Focus", precio: 22000, añoFabricacion: 2023 },
  ]

  const moto = [
    { marca: "Yamaha", modelo: "YZF-R6", precio: 12000, añoFabricacion: 2022 },
    { marca: "Harley-Davidson", modelo: "Sportster", precio: 15000, añoFabricacion: 2022 },
    { marca: "Honda", modelo: "CBR600RR", precio: 14000, añoFabricacion: 2023 }, 
  ]
  const camioneta = [
    { marca: "Ford", modelo: "Explorer", precio: 35000, añoFabricacion: 2022 },
    { marca: "Toyota", modelo: "RAV4", precio: 33000, añoFabricacion: 2023 },
    { marca: "Chevrolet", modelo: "Tahoe", precio: 40000, añoFabricacion: 2022 },
    
  ]
  /*function calcularCotizacion(){
    let tipoVehiculo = prompt("que vehiculo te gustaria cotizar")

    tipoVehiculo = vehiculo.find((vehiculo)=> vehiculo)
  }

  function filtrarAñoDeFabricacion() {
    let año = prompt ("ingresa el año del vehiculo que deseas")
  }

  let filtrarAñoDeFabricacion = vehiculos.filter( (vehiculo)=>vehiculo.añoFabricacion >= parseInt(precio) )
  console.table(filtrarAñoDeFabricacion) */

  function iniciarCotizacion() {
    let tipoVehiculo = prompt("¿Qué vehículo te gustaría cotizar? (auto, moto, camioneta)");

    switch (tipoVehiculo.toLowerCase()) {
        case 'auto':
            cotizarVehiculos(auto);
            break;
        case 'moto':
            cotizarVehiculos(moto);
            break;
        case 'camioneta':
            cotizarVehiculos(camioneta);
            break;
        default:
            console.log("Tipo de vehículo no válido");
    }
}

function cotizarVehiculos(vehiculos) {
    for (let i = 0; i < vehiculos.length; i++) {
        const vehiculo = vehiculos[i];
        const cotizacion = calcularCotizacion(vehiculo.marca + " " + vehiculo.modelo, vehiculo.precio, vehiculo.añoFabricacion);
        console.log(`La cotización para ${vehiculo.marca} ${vehiculo.modelo} es: $${cotizacion}`);
    }
}
