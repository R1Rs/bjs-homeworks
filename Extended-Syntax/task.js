"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let arr = [];
    if (d === 0) {
        arr[0] = (-b) / (2 * a);
        arr[1] = null;
    } else if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    }

    return arr;
    // код для задачи №1 писать здесь
    //return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    debugger;
    let count = marks.length;
    let sum = 0;
    let arr5 = [];
    
    if (count > 5) {
        console.log("Количество оценок больше 5");
        arr5 = marks.slice(0, 5);
    } else {
        arr5 = marks;
    }
    
    for (i = 0; i < arr5.length; i++) {
        sum += arr5[i];
    }
    let averageMark = sum / arr5.length;
    return averageMark;

    // код для задачи №2 писать здесь
    //return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let now = new Date();
    let yearBirthday = dateOfBirthday.getFullYear();
    let old = now.getFullYear() - yearBirthday;
    if (old >= 18) {
        return(`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }

    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}