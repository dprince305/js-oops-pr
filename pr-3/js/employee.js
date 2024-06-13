class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const e1 = new Employee("prince", 19);

document.querySelector('h1').innerHTML=(`Employee name: ${e1.name}, Age: ${e1.age}`);