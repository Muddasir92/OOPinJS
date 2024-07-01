const oops = document.querySelector("#oops")
class person{


    constructor( work , experience){
        this.work = work;
        this.experience = experience;

    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}


class doctor extends person{
    working(){
        console.log("Working on constructions ")
    }
    
}
let obje = new doctor("engineering " , 7);
console.log(obje);
oops.innerHTML = obje.eat;

