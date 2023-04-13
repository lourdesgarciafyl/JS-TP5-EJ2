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
            return `<ul>
            <li>Generación: Silent Generation</li>
            <li>Marco temporal: 1930 - 1940</li>
            <li>Circunstancia histórica: Conflictos bélicos</li>
            <li>Rasgo característico: Ansiedad</li>
            </ul>
            `
        } else if(this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            return `<ul>
            <li>Generación: Baby Boom</li>
            <li>Marco temporal: 1949 - 1968</li>
            <li>Circunstancia histórica: Paz y explosión demográfica</li>
            <li>Rasgo característico: Ambición</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            return `<ul>
            <li>Generación: Generación X</li>
            <li>Marco temporal: 1969 - 1980</li>
            <li>Circunstancia histórica: Crisis del 73 y transición española</li>
            <li>Rasgo característico: Obsesión por el éxito</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            return `<ul>
            <li>Generación: Generación Y (Millenials)</li>
            <li>Marco temporal: 1981 - 1993</li>
            <li>Circunstancia histórica: Inicio de la digitalización</li>
            <li>Rasgo característico: Frustración</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            return `<ul>
            <li>Generación: Generación Z</li>
            <li>Marco temporal: 1994 - 2010</li>
            <li>Circunstancia histórica: Expansión masiva de Internet</li>
            <li>Rasgo característico: Irreverencia</li>
            </ul>`
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
        return `<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad} años</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} cm</li>
        <li>Año de nacimiento: ${this.anioDeNacimiento}</li>
        </ul>`
    }
}
let nombreApellido = document.getElementById(`nombreApellido`);
//console.log(nombreApellido)
let edad = document.getElementById(`edad`);
//console.log(edad)
let dni = document.getElementById(`dni`);
//console.log(dni)
let sexo = document.getElementById(`sexo`);
//console.log(sexo)
let peso = document.getElementById(`peso`);
//console.log(peso)
let altura = document.getElementById(`altura`);
//console.log(altura)
let anioNac = document.getElementById(`anio`);
let btnMostrar = document.querySelector(`#btnMostrar`);
let btnGeneracion = document.querySelector(`#btnGeneracion`);
let btnMayorMenor = document.querySelector(`#btnMayorMenor`);
let formPersona = document.querySelector(`form`);
// console.log(formPersona)

formPersona.addEventListener(`submit`, llenarForm)

function llenarForm(e){
    e.preventDefault()
    //console.log(e)
    let nuevaPersona = new Persona(
        nombreApellido.value,
        edad.value,
        dni.value,
        sexo.value,
        peso.value,
        altura.value,
        anioNac.value
    )
    formPersona.reset()

    let contenedorDatosMostrados = document.querySelector(`#contenedorDatosMostrados`);
    contenedorDatosMostrados.className = `my-2 container`;
    console.log(contenedorDatosMostrados)
    contenedorDatosMostrados.children[0].children[0].innerHTML = `Persona: ${nuevaPersona.nombre}`
    
    btnMostrar.addEventListener(`click`, () => mostrarDatosPersona(nuevaPersona));
    btnGeneracion.addEventListener(`click`,() => mostrarGeneracionUsuario(nuevaPersona));
    btnMayorMenor.addEventListener(`click`, () => mostrarMayorOMenor(nuevaPersona))
}

function mostrarDatosPersona(nuevaPersona){
    let divDatosMostrados = document.querySelector(`#divDatosMostrados`);
    divDatosMostrados.innerHTML = nuevaPersona.mostrarDatos();
} 
function mostrarGeneracionUsuario(nuevaPersona){
    let divParaGeneracion = document.querySelector(`#divDatosMostrados`);
    divParaGeneracion.innerHTML = nuevaPersona.mostrarGeneracion();
}
function mostrarMayorOMenor(nuevaPersona){
    let divParaEdad = document.querySelector(`#divDatosMostrados`);
    divParaEdad.innerHTML = nuevaPersona.esMayorDeEdad();
}