//console.log("Bienvenidos")

let mensaje : string = "Bienvenidos";

mensaje = "Hola";


mensaje = "Chao"
console.log (mensaje)
console.log (typeof[])

/**
 * tipos js
 * num
 * string
 * boolean
 * null
 * undefined
 * obj
 * fun
 * 
 * tipos ts
 * any
 * unknow
 * never
 * arrays
 * tuplas
 * enums
 * 
 * tipado inferido
 */

let extincionDino : number = 76_000_000
let dinoFavorito : string = "T-Rex"
let extintos = true

function gatito (config : any){
    return config
}

//arreglos

let animales = ['gato', 'pomposo', ]
let nums : number[] = [1, 2]
let checks : boolean[] = []
let nums2 : Array <number> = []

// animales.map(x => x.)  //.map itera los elementos de un arreglos y aplicarles una fun

//Tuplas. Podemos guardar datos mientras esten pre definidos

let tupla : [number, string ] = [1, 'gatito']
let tuplas : [number, string[]] = [1, ['gatitos', 'perritos']]


//enums 
//enum Talla {Chica = 2 , Mediana, Grande, ExtraGrand }
enum Talla {Chica = 's' , Mediana= 'm', Grande= 'l', ExtraGrande= 'xl' }

const variable = Talla.Grande
console.log(variable);

//Estado de carga
const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success

// Objetos
//

//const objeto = { id: 1, nombre: ''}
//objeto.nombre = 'Hola' 

type Direccion = {
    numero : number,
    calle : string,
    pais: string,
}

type Persona= {  //Definido tipo de persona
    
        readonly id: number, //readonly: las propiedades no pueden ser cambiadas, no permite reasignar una prop solo de lectura.
        nombre?: string,  //signo '?' hace que sea opcional
        talla: Talla,
        direccion: Direccion
}

const objeto: Persona = { 
    id: 1, 
    nombre: '', 
    talla: Talla.Chica,
    direccion:{
        numero: 1,
        calle: 'asdf',
        pais: 'Argentina'
    }
    
}

const arr: Persona [] = [] //arreglo contiene objetos que definamos

