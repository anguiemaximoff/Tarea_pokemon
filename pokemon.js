class entrenador{
    constructor(nombre, region, medallas,pokemon1, pokemon2, pokemon3){
    this.nombre=nombre;
    this.region=region;
    this.medallas=medallas;
    this.pok1=pokemon1;
    this.pok2=pokemon2;
    this.pok3=pokemon3;
    }
    batalla1(){
        console.log(this.nombre+" lanzó al pokemon "+this.pok2)
    }
    batalla2(){
        console.log(this.nombre+" lanzó al pokemon "+this.pok1)
    }
    batalla3(){
        console.log(this.nombre+" lanzó al pokemon "+this.pok3)
    }
    eliminacion(){
        console.log(this.nombre+" se ha quedado sin pokemones y ha sido eliminado")
    }
    ganador(){
        console.log(this.nombre+" ha ganado la partida!!!!!!!!!!!!!!!!!!")
    }
}


let entrenador1= new entrenador("León","Sinnoh", 10, "Torterra", "Froslass","Bronzong")


let entrenador2= new entrenador("Hotaru","Paldea", 12, "Meowscarada", "Gallade","Glimmora")


class pokemon{
    constructor(nombrep, vida, defensa, velocidad, movimiento1, movimiento2, movimiento3, movimiento4, tipo){
    this.nombrep=nombrep;
    this.vida=vida;
    this.defensa=defensa;
    this.vel=velocidad;
    this.mov1=movimiento1;
    this.mov2=movimiento2;
    this.mov3=movimiento3;
    this.mov4=movimiento4;
    this.tipo=tipo;
    }
    ataque1(){
        console.log(this.nombrep+" utilizó el ataque "+this.mov1)
    }
    ataque2(){
        console.log(this.nombrep+" utilizó el ataque "+this.mov2)
    }
}

let torterra= new pokemon("Torterra", 6, 8, 2, "Beso drenaje", "Terratemblor","Somnífero", null, "Planta")
let froslass= new pokemon("Froslass", 5, 7, 6, "Somnífero", null, null, "Beso drenaje", "Fantasma")
let bronzong= new pokemon("Bronzong", 4, 8, 3, "Mordisco", "Terratemblor","Somnífero", "Beso drenaje", "Psíquico")

let meowscarada= new pokemon("Meowscarada", 6, 4, 5, "Premonición", "Paz mental", null,"Tormenta de arena", "Siniestro")
let glimmora= new pokemon("Glimmora", 7, 3, 2, "Paz mental", "Tormenta de arena","Premonición", "Joya de luz", "Veneno")
let gallade= new pokemon("Gallade", 8, 4, 6, "Premonición", "Joya de luz", null, null, "Lucha")

class movimiento{
    constructor(nombrem, potencia, probabilidad, tipoele, tipoesp){
    this.nombrem=nombrem;
    this.potencia=potencia;
    this.probabilidad=probabilidad;
    this.tipoele=tipoele;
    this.tipoesp=tipoesp;
    }
}

let terratemblor= new movimiento("Terratemblor", 8, 75, "Tierra", "Físico")
let beso_drenaje= new movimiento("Beso drenaje", 9, 85, "Hada", "Especial")
let somnifero= new movimiento("Somnífero", 7, 70, "Planta", "Estado")
let mordisco= new movimiento("Mordisco", 5, 60, "Siniestro", "Físico")

let premonicion= new movimiento("Premonición", 8, 80, "Psíquico", "Especial")
let paz_mental= new movimiento("Paz mental", 9, 90, "Psíquico", "Estado")
let tormenta_de_arena= new movimiento("Tormenta de arena", 9, 95, "Roca", "Estado")
let joya_de_luz= new movimiento("Joya de luz", 7, 65, "Roca", "Especial")

console.log(entrenador1)

console.log(entrenador2)

entrenador1.batalla1();

console.log(froslass)

entrenador2.batalla1();

console.log(gallade)

froslass.ataque1();

console.log(somnifero)

gallade.ataque1();

console.log(premonicion)

console.log ("Froslass ha sido eliminado")

entrenador1.batalla2();

console.log(torterra)

torterra.ataque1();

console.log(beso_drenaje)

console.log ("Gallade ha sido eliminado")

entrenador2.batalla2();

console.log(meowscarada)

meowscarada.ataque2();

console.log(paz_mental)

console.log ("Torterra ha sido eliminado")

entrenador1.batalla3();

console.log(bronzong)

bronzong.ataque2();

console.log(terratemblor)

console.log ("Meowscarada ha sido eliminado")

entrenador2.batalla3();

console.log(glimmora)

glimmora.ataque2();

console.log(tormenta_de_arena)

console.log ("Bronzong ha sido eliminado")

entrenador1.eliminacion();

entrenador2.ganador();