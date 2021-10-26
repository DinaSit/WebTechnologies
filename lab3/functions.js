function f1() {
    var result = confirm("Hello!")
    window.confirm("Ответ: " + result)
}

function f2() {
    let a = prompt("Введите фамилию")
    a = ("Привет, " + a)
    alert(a)
}

function f3() {
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("c")
    let d = document.getElementById("d")
    let e = prompt("Введите имя")
    let f = prompt("Введите возраст")
    let g = prompt("Введите настроение")
    a.innerHTML = "Здравствуй, " + e
    b.innerHTML = "Тебе " + f + " лет"
    c.innerHTML = "И у тебя " + g + " настроение!"
    d.innerHTML = "Всё верно, не так-ли?!"
}

function f4() {
    var x = prompt("Введите значение x ", "457");
    var y = prompt("Введите значение y ", "0.5");
    var integerX = parseInt(x);
    var floatY = parseFloat(y);
    var result = integerX + floatY;
    document.write("Ответ: " + result);
}

function f5() {
    var firstName = prompt("Введите имя", "сюда")
    var lastName = prompt("Введите фамилию")
    var age = prompt("Введите возраст")
    var floatAge = parseFloat(age);
    var res = floatAge + 1;
    alert("В следующем году вам будет " + res);
}

function f6() {
    let id = prompt("Ввести id", "ID2 (от 1 до 3)");
    innerHTML = document.getElementById(id).innerHTML;
    alert(innerHTML);
}

function f7() {
    let id = prompt("Ввести id", "ID2 (от 1 до 3)");
    let text = prompt("Введите новый текст");
    document.getElementById(id).innerHTML = text;
}