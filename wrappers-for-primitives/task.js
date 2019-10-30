"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // проверка на корректность введенных данных
    
    if (typeof(percent) !== number) {
        console.log(`Параметр <Процентная ставка> содержит неправильное значение <${percent}>.`);
    }  else if (typeof(contribution) !== number) {
        console.log(`Параметр <Начальный взнос> содержит неправильное значение <${contribution}>.`);
    }  else if (typeof(amount) !== number) {
        console.log(`Параметр <Процентная ставка> содержит неправильное значение <${amount}>.`);
    }

    let bodyCredit = amount - contribution; // сумма, которую необходимо вернуть в банк
    let P = percent / 12;
    let now = new Date(); // текущая дата
    let numberMonths = date - now; // расчёт срока в месяцах
    let monthlyPayment = amount * (P + P / (Math.pow(1 + P, numberMonths)) - 1); //ежемесячная плата
    let totalAmount = bodyCredit + monthlyPayment * numberMonths; // общая сумма, которую придется заплатить клиенту

    return totalAmount;

    // код для задачи №1 писать здесь
    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (typeof(name) === String) {
       return `Привет, Мир! Меня зовут ${name}`;
    }  else {
        return "Привет, Мир! Меня зовут Аноним";
    }

    // код для задачи №2 писать здесь
    //return greeting;
}