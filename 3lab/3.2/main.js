// Создание логина
document.querySelector('#confirmLogin').onclick = () => {
    var login = document.querySelector("#createLogin").value;
    const regexp = /\W/
    if(login.match(regexp))
        alert('Логин должен содержать только буквы и цифры')
    else
        console.log(login);
}

// Создание пароля
document.querySelector('#confirmPassword').onclick = () => {
    var password = document.querySelector("#createPassword").value;
    const regexpWhiteSpace = /[\s^а-я]/
    
    if (password.match(regexpWhiteSpace))
        alert('пароль не должен содержать пробелы и буквы другого алфавита')
    else
        console.log(password);
}

// Выбор курса
document.querySelector('#radio_1').oninput = () => {
    var course = document.querySelector('#radio_1').value;

    console.log(course);
}

// Выбор возрастаъи
document.querySelector('#ageInput').oninput = () => {
    var ageValue = document.querySelector("#ageInput").value;
    document.querySelector('span').innerHTML = ageValue;
}

// Чекбокс
document.querySelector('#submitButton').onclick =() => {
    let myCheckBox = document.querySelector('#lastCheck');
    
    if (!myCheckBox.checked)
        alert('Вы обязаны согласиться на обработку персональных данных')
    else
        console.log(myCheckBox.checked)
}