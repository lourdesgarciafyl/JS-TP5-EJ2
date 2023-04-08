let btnMostrar = document.querySelector(`#btnMostrar`)
let btnGeneracion = document.querySelector(`#btnGeneracion`)
let btnMayorMenor = document.querySelector(`#btnMayorMenor`)
let formPersona = document.querySelector(`form`)
console.log(formPersona)
formPersona.addEventListener(`submit`, llenarForm)

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }
    get mostrarNombre(){
        return this.nombre;
    }
    set cambiarNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    get mostrarEdad(){
        return this.edad;
    }
    set cambiarEdad(nuevaEdad){
        this.edad = nuevaEdad;
    }
    get msotrarDni(){
        return this.dni;
    }
    set cambiarDni(nuevoDni){
        this.dni = nuevoDni;
    }
    get mostrarSexo(){
        return this.sexo;
    }
    set cambiarSexo(nuevoSexo){
        this.sexo = nuevoSexo;
    }
    get mostrarPeso(){
        return this.peso;
    }
    set cambiarPeso(nuevoPeso){
        this.peso = nuevoPeso;
    }
    get mostrarAltura(){
        return this.altura;
    }
    set cambiarAltura(nuevaAltura){
        this.altura = nuevaAltura;
    }
    get mostrarAnio(){
        return this.anioDeNacimiento;
    }
    set cambiarAnio(nuevoAnio){
        this.anioDeNacimiento = nuevoAnio;
    }
    mostrarGeneracion(){
        if(this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948){
            return `
            Generación: Silent Generation
            Marco temporal: 1930 - 1940
            Circunstancia histórica: Conflictos bélicos
            Rasgo característico: Ansiedad
            `
        } else if(this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            return `
            Generación: Baby Boom
            Marco temporal: 1949 - 1968
            Circunstancia histórica: Paz y explosión demográfica
            Rasgo característico: Ambición
            `
        } else if(this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            return `
            Generación: Generación X
            Marco temporal: 1969 - 1980
            Circunstancia histórica: Crisis del 73 y transición española
            Rasgo característico: Obsesión por el éxito
            `
        } else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            return `
            Generación: Generación Y (Millenials)
            Marco temporal: 1981 - 1993
            Circunstancia histórica: Inicio de la digitalización
            Rasgo característico: Frustración
            `
        } else if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            return `
            Generación: Generación Z
            Marco temporal: 1994 - 2010
            Circunstancia histórica: Expansión masiva de Internet
            Rasgo característico: Irreverencia
            `
        } else{
            return `No hay información sobre ese año.`
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            return `${this.nombre} es mayor de edad.`
        } else{
            return `${this.nombre} es menor de edad`
        }
    }
    mostrarDatos(){
        return `
        Nombre: ${this.nombre}
        Edad: ${this.edad} años
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso} kg
        Altura: ${this.altura} cm
        Año de nacimiento: ${this.anioDeNacimiento}
        `
    }
}

function llenarForm(e){
    e.preventDefault()
    //console.log(e)
    let nombreApellido = document.getElementById(`nombreApellido`).value;
    //console.log(nombreApellido)
    let edad = document.getElementById(`edad`).value
    //console.log(edad)
    let dni = document.getElementById(`dni`).value
    //console.log(dni)
    let sexo = document.getElementById(`sexo`).value
    //console.log(sexo)
    let peso = document.getElementById(`peso`).value
    //console.log(peso)
    let altura = document.getElementById(`altura`).value
    //console.log(altura)
    let anioNac = document.getElementById(`anio`).value
    //console.log(anioNac)
    let nuevaPersona = new Persona(nombreApellido, edad, dni, sexo, peso, altura, anioNac)
    
    btnGeneracion.addEventListener(`click`, mostrarGeneracionUsuario)
    function mostrarGeneracionUsuario(){
        alert(nuevaPersona.mostrarGeneracion())
    }

    btnMayorMenor.addEventListener(`click`, mostrarMayorOMenor)
    function mostrarMayorOMenor(){
        alert(nuevaPersona.esMayorDeEdad())
    }

    btnMostrar.addEventListener(`click`, mostrarDatosPersona)
    function mostrarDatosPersona(){
        alert(nuevaPersona.mostrarDatos())
        formPersona.reset();
    }
}