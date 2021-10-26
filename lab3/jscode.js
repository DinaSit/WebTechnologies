// alert("Hello!");
// var result = confirm("Вы действительно хотите сдать дисциплину??")
// alert(result)

function func_name() {
    let e = document.getElementById("par")
    // alert(e.innerText)

    let a = prompt("Введите число а")
    let b = prompt("Введите число b")
    let anum = parseInt(a)
    let bnum = parseInt(b)
    let res = anum + bnum

// document.write("Ответ: " + res)

    e.innerHTML = "<b>" + res + "</b>"
    e.classList.add("add-class")
    e.classList.remove("a-class")
}

function  ta_change() {
    let e = document.getElementById("par")
    let ta = document.getElementById("ta")
    e.innerText = ta.value
}