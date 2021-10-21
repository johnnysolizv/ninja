


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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
