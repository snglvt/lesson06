'use strict'
//"Загадайте случайного числа от 1 до 100"

//функция проверяет является ли переменная числом
//return true если не бесконечное число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
//функция проверки на null. return false если не null
function customNumberIsNull(customNumber){
    if (customNumber === null) {
        return true;
    }
    return false;
}
//получаем значение от пользователя
function getNumber(){
    let userNumber = prompt("Угадайте число от 1 до 100", '');
    if(customNumberIsNull(userNumber)){
        return false;        
    }
    //пока не будет введено число
    while(!isNumber(userNumber)){
        userNumber = prompt('Введите число');
        //если нажали отмена
        if(customNumberIsNull(userNumber)){
            return false; 
        }
    }
    return userNumber;
}

//функция логики игры
let gameResult = function getHiddenNumber(){
    //загаданное число
    let hiddenNumber = 10;

    return function getResult(){
        //введенное пользователем число
        let customNumber = getNumber();
        //если пользователь нажал - Отмена
        if(customNumber == false){
            alert('Игра окончена');
            return;
        }
        if (customNumber > hiddenNumber){
            alert("Загаданное число меньше");
            getResult();
        }
        if (customNumber < hiddenNumber){
            alert("Загаданное число больше");
            getResult();
        }
        if (customNumber == hiddenNumber){
            alert("Поздравляю, Вы угадали!!!");
            return;
        }
    };
};

let game = gameResult();
game();
