function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now(); // текущее время в миллисекундах
    let birthday = Date.now(birthday); // дата рождения в мс
    let diff = now - birthday; // разница дата 
    let age = diff / 31536000000; // вычислиние количества лет
// функция определения совершеннолетия
    if (age >= 18) {
        return "Совершеннолетний";
     } else {
            return "Несовершеннолетний";
        }
    }
    // код для задачи №3 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = Object.create(animal).sound; // переменная с присвоенными значениями прототипа
    if (typeof(animal) === undefined) { 
        return null;
    }  else {
        return sound; // возвращаем значение переменной
    }
    // код для задачи №1 писать здесь
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    // считаем и возвращаем сумму элементов в массиве
    function getSum() {
      for (i = 0; i < marks.length; i++) {
          sum += arr[i];
    } return sum; 
    }

    let average = sum / marks.length; // считаем среднее, разделив сумму на количество элементов в массиве
    let roundedAverage = Math.round(average); // округляем до ближайшего целого
    return roundedAverage;
    // код для задачи №2 писать здесь
}