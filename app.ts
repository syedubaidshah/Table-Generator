document.getElementById("btn").addEventListener("click", function (event) {
	event.preventDefault();
	let btnClick = document.getElementById("input").value;
	let outputAns = document.getElementById("ou-ul");
	outputAns.innerHTML = "";
	for (i = 1; i <= 10; i++) {
	  outputAns.innerHTML += btnClick + "x" + i + "=" + btnClick * i + "<br>";
	}
  });

  //clear
let btn2 = document.getElementById('btn-2')
btn2.addEventListener('click' ,clear)
function clear(el) {
	let bt = el.currentTarget
	let li = bt.previousElementSibling.textContent = ""
}