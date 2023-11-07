let mensaje: string = "HOla mundo";

mensaje = "chanchito feliz";



mensaje = "chao mundo";


let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex";
let extintos = true;


let animales: string[] = ["chanchito", "feliz", "felipe"];
let nums: number[] = [1, 2, 3];
let checks: boolean[]= [];
let nums2: Array<number> = []

//nums.map(x => x.) el autocompletado sugiere metodos del tipo de dato.

let tupla: [number, string] = [1, 'chanchito feliz'];


const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';


// ENUMS
// PascalCase(PascalCase Es una convencion donde siempre la primer letra tiene que ser en mayuscula y resto en minuscula)
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }


const variable1 = Talla.Grande;
console.log(variable1);

const enum LoadingState {Idle, Loading, Success, Error};

const estado = LoadingState.Success

type Direccion = {
        numero: number,
        calle: string,
        pais: string
    
}

type Persona =   {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion 
}
const objeto: Persona = { 
    id: 1, 
    nombre: 'Hola mundo', 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}


const arr: Persona[] = []

  

