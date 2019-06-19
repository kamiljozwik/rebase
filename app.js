const people = ['Jan', 'Kamil', 'Max', 'Tom'];
const greetings = ['Hello', 'Cześć', 'Hi', 'Hola'];

function greet() {
    for (const person of people) {
        const randomGreet = greetings[Math.floor(Math.random() * greetings.length)];
        console.log(`${randomGreet} ${person} !`);
    }
}

greet();
