const fs = require('fs');

//Bracket opening means santa goes 1 floor up
//Bracket clossing means santa goes 1 floor down

//Question 1
//To what floor do the instructions take Santa?

const question1 = () => {
    let directionsArray = [];
    fs.readFile('./input-day-1.txt', (err, data) => {
        if (err) { console.log(err); }
        else {
            let floor = 0;
            directionsArray = data.toString().split('')
            for (let i = 0; i < directionsArray.length; i++) {
                if (directionsArray[i] === '(') {
                    floor += 1;
                }
                else if (directionsArray[i] === ')') {
                    floor -= 1;
                };
            };
            console.log(`Instructions take Santa to ${floor} Floor`);
        };
    });
};

//Question 2
//find the position of the first character that causes him to enter the basement

const question2 = () => {
    let directionsArray = [];
    fs.readFile('./input-day-1.txt', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            let floor = 0;
            directionsArray = data.toString().split('');
            for (let i = 0; i < directionsArray.length; i++) {
                if (directionsArray[i] === '(') {
                    floor += 1;
                }
                else if (directionsArray[i] === ')') {
                    floor -= 1;
                }
                if (floor === -1) {
                    console.log(`The first character that causes Santa to enter the basement is at ${i + 1} position`);
                    break;
                }
            }
        }
    })
}


question1();
question2();