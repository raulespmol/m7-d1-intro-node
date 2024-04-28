const {leer_citas, registrar_cita} = require('./operaciones.js')

const operacion = process.argv[2].toLocaleLowerCase()
const argumentos = process.argv.slice(3)


switch (operacion) {
  case 'leer':
    console.log(leer_citas()); 
    break;

  case 'registrar':
    const [nombre, edad, tipo, color, enfermedad] = argumentos
    registrar_cita(nombre, edad, tipo, color, enfermedad)

  default:
    break;
}