
let tipoVehiculo = {}



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
 
    var boton = document.getElementById ('cotizar')
    boton.addEventListener ('click', iniciarCotizacion)


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
        //const cotizacion = calcularCotizacion(vehiculo.marca + " " + vehiculo.modelo, vehiculo.precio, vehiculo.añoFabricacion);
        console.log(`La cotización para ${vehiculo.marca} ${vehiculo.modelo} es: $${cotizacion}`);
    }
}
