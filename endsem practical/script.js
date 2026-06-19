function check() {
    let n = document.getElementById("num").value;
    document.getElementById("result").innerHTML =
        (n % 2 == 0) ? n + " is Even" : n + " is Odd";
}