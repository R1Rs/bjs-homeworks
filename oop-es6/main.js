// Задание 1

// Создаём класс и методы
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        this.damage = damage;
        if (this.durability - damage < 0) {
            return this.durability = 0;
        }  return this.durability = this.durability - damage; 
    }
    getDamage() {
        
        if ((this.durability - this.damage) >= (this.durability / 100 * 30)) {
            return this.attack;
        }  else if (this.durability === 0) {
            return this.attack = 0;
        }  else {
            return this.attack = this.attack / 2;
        }
    }
    isBroken() {
        if (this.durability > 0) {
            return false;
        } return true;
    }
} 

// Создаём экземпляры класса - перечень оружия

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const blade = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const stick = new Weapon("Посох", 8, 300, 2);

// ВОПРОС: как добавить версией чего является данное оружие? в таблице задания пишется что например longBow - версия лука.
const longBow = new Weapon("Длинный лук", 15, bow.durability, 4);
const axe = new Weapon("Секира", 27, 800, blade.range);
const stickStorm = new Weapon("Посох Бури", 10, stick.durability, 3);

// Задание 2

// Создание классов обычного вида оружия

class Arm extends Weapon {}
class Bow extends Weapon {}
class Blade extends Weapon {}
class Knife extends Weapon {}
class Stick extends Weapon {}

// Создание классов усиленного вида оружия

class LongBow extends Bow {}
class Axe extends Blade {}
class stickStorm extends Stick {}

// Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        this.grade = [grade];
        if ((this.grade.length < 1) || (this.grade.length > 5)) {
            return "Ошибка" && this.grade.length;
        }  return this.grade.length;
    }
    getAverageBySubject(subject) {
        this.subject = subject;
        let sum = 0;
        if (this.subject === undefined) {
            return 0;
        }   for (i = 0; i < this.grade.length; i++) {
            sum += this.grade[i];
        }   return sum / this.grade.length;
    }
    getTotalAverage() {
        // Не понял каким методом можно сложить все оценки по всем предметам. Просьба подсказать.
    }
}
