'use strict'
//"Загадайте случайного числа от 1 до 100"

//функция проверяет является ли переменная числом
//return true если не бесконечное число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
//функция проверки на null. false если не null
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
    return function(){
        //пока не будет введено число
        while(!isNumber(userNumber)){
            userNumber = prompt('Введите число');
            //если нажали отмена
            if(customNumberIsNull(userNumber)){
                return userNumber = false; 
            }
        }
        return userNumber;
    }
}

let gameResult = function getHiddenNumber(){
    let hiddenNumber = 10;
    let customNumber = getNumber();
    
    //если пользователь нажал - Отмена
    if(customNumber == false){
        alert('Игра окончена');
        return;
    }
    if(customNumber() == false){
        alert('Игра окончена');
        return;
    }
        if (customNumber() > hiddenNumber){
            alert("Загаданное число меньше");
            getHiddenNumber();
        }
        else if (customNumber() < hiddenNumber){
            alert("Загаданное число больше");
            getHiddenNumber();
        }
        else if (customNumber() == hiddenNumber){
            alert("Поздравляю, Вы угадали!!!");
            return;
        }
};
gameResult();

