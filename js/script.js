var button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
	toggleTextServices(button1, 0);
});
var button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
	toggleTextServices(button2, 1);
});
var button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
	toggleTextServices(button3, 2);
});
var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
	toggleTextServices(button4, 3);
});

function toggleTextServices(button, x)
{
	var textServices = document.querySelectorAll("#services span");
	textServices[x].classList.toggle("more");
	if (textServices[x].className == "more")
	{
		button.innerText = "Lire plus";
	}
	else 
	{
		button.innerText = "Réduire";
	}
}