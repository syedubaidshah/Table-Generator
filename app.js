document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    var btnClick = document.getElementById("input").value;
    var outputAns = document.getElementById("ou-ul");
    outputAns.innerHTML = "";
    for (i = 1; i <= 10; i++) {
        outputAns.innerHTML += btnClick + "x" + i + "=" + btnClick * i + "<br>";
    }
});
//clear
var btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', clear);
function clear(el) {
    var bt = el.currentTarget;
    var li = bt.previousElementSibling.textContent = "";
}
