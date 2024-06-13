document.querySelector('h2').innerHTML="*STUDENT*";
document.getElementById('p1').innerHTML="*PEON*";
document.getElementById('f1').innerHTML="*FACULTY*";
class school{
    student(name,contact,email) {
        document.getElementById('n1').innerHTML = `My name is =${name}`
        document.getElementById('c1').innerHTML = `My contact no is =${contact}`
        document.getElementById('e1').innerHTML = `My gmail is =${email}`
    }
    peon(name,contact,email) {
        document.getElementById('n2').innerHTML = `My name is =${name}`
        document.getElementById('c2').innerHTML = `My contact no is =${contact}`
        document.getElementById('e2').innerHTML = `My gmail is =${email}`
    }
    faculty(name,contact,email) {
        document.getElementById('n3').innerHTML = `My name is =${name}`
        document.getElementById('c3').innerHTML = `My contact no is =${contact}`
        document.getElementById('e3').innerHTML = `My gmail is =${email}`
    }
}

let student1 = new school();
student1.student("Prince","7862069263","dholariyaprince15@gmail.com");

let peon = new school();
peon.peon("Raj","9926883375","raj@gmail.com");

let faculty = new school();
faculty.faculty("Keyur sir","9510316014","keyur52@gmail.com");
