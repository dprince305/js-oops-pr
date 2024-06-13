
class person {
    constructor(){

    }

}

class father extends person {
    constructor(age) {
        super();
        this.age = age;
    }

    fatherage() {
        return  this.age;
    }
}

class son extends person {
    constructor(age) {
        super();
        this.age = age;
    }

    sonage() {
        return  this.age;
    }
}

let fatherage1 = new father(60);
document.querySelector('h1').innerHTML=(`Father age is :- ${fatherage1.fatherage()}`);

let son1 = new son(20);
document.querySelector('h2').innerHTML=(`Son age is :- ${son1.sonage()}`);
