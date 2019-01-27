var util = require('util');

var obj = {
    a: 5,
    b: "Test",
    inspect: function() {
        return 123;
    }
};

var str = util.format("My %s %d %j","TTTT", 123, {jj: "222"});
console.log(str);
//console.log(util.inspect(obj));

function Animal(n) {
    this.name = n;
}
Animal.prototype.walk = function (){
    console.log("Ходит " + this.name);
}

function Cat(n) {
    this.name = n;
}
Cat.prototype.sound = function() {
    console.log("Мяукает "+ this.name);
}
util.inherits(Cat,Animal);

var murka = new Cat("Мурка");
murka.sound();
murka.walk();


console.log('Log');
console.error('Error');