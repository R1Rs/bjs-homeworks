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

const longBow = new Weapon("Длинный лук", 15, bow.durability, 4);
const axe = new Weapon("Секира", 27, 800, blade.range);
const stickStorm = new Weapon("Посох Бури", 10, stick.durability, 3);

// Задание 2

// Создание классов обычного вида оружия

  class Arm extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Рука';
      this.attack =  1;
      this.durability =  Infinity;
      this.range = 1;
    }
  }
  class Bow extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Лук';
      this.attack =  10;
      this.durability =  200;
      this.range = 3;
    }
  }
  class Blade extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Меч';
      this.attack =  25;
      this.durability =  500;
      this.range = 1;
    }
  }
  class Knife extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Нож';
      this.attack =  5;
      this.durability =  300;
      this.range = 1;
    }
  }
  class Stick extends Weapon {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Посох';
      this.attack =  8;
      this.durability =  300;
      this.range = 2;
    }
  }
  
// Создание классов усиленного вида оружия

  class LongBow extends Bow {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Длинный лук';
      this.attack =  15;
      this.range = 4;
    }
  }
  class Axe extends Blade {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Секира';
      this.attack =  27;
      this.durability =  800;
    }
  }
  class LongBow extends Stick {
    constructor(name, attack, durability, range) {
      super (name, attack, durability, range);
      this.name = 'Посох бури';
      this.attack =  10;
      this.range = 3;
    }
  }

// Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = [];
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
    
    getToralAverage(){
        let average  = 0;
        if (this.marks.length === 0) {
          return 0;
        }
          this.marks.forEach(function(item, i) {
          average += (item.mark.reduce(function(sum, current){
          return sum + current })) / item.mark.length;
        })
          return average / this.marks.length; 
          }
        }
       
    

