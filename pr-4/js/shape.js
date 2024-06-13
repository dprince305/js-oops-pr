class Shape {
    constructor() {

    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let c1 = new Circle(7);
document.querySelector('h1').innerHTML=(`Circle area: ${c1.area()}`);

let r1 = new Rectangle(5 , 7);
document.querySelector('h2').innerHTML=(`Rectangle area: ${r1.area()}`);
