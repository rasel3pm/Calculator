function deliteButton() {
    document.getElementById("result").value = ""
}

function calculating(analyze) {
    document.getElementById("result").value += analyze
}

function answer() {
    var a = document.getElementById("result").value;
    var b = eval(a)
    document.getElementById("result").value = b
}