
class Ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre=nombre;
        this.salud=100; //extra.
        this.velocidad = 3;
        this.fuerza = 3;

    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log("nombre : "+this.nombre);
        console.log("salud : "+this.salud);
        console.log("velocidad : "+this.velocidad);
        console.log("fuerza : "+this.fuerza);
    }
    drinkSake(){
       this.salud += 10;
    }

}



class Sensei extends Ninja{
    constructor(nombre, salud, velocidad, fuerza){      
       super(nombre, salud, velocidad = 10,  fuerza =10)
       this.salud = 200;
       this.velocidad = 10;
       this.fuerza =10;
       this.sabiduria=10; 
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

}




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"