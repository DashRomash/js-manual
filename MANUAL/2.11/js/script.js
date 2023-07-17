//if (age >= 14 && age <= 90)

//if (!(age > 14 && age < 90)) if (age > 14 || age < 90);

//if (-1 || 0) alert('first') //-1 истина 0-ложно, должно вывести  истину
//if (-1 && 0) alert('second'); //-1 истина 0-ложно, должно вывести ложность
let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}