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

/* Slider */

var indexSlide = 1;

var loading = document.querySelector("#loader.animationLoad");
loading.addEventListener("animationiteration", function() {
    displaySlide(indexSlide += 1);
});
var previousSlide = document.getElementById("previous");
previousSlide.addEventListener("click", function() {
    displaySlide(indexSlide -= 1);
});
var nextSlide = document.getElementById("next");
nextSlide.addEventListener("click", function() {
    displaySlide(indexSlide += 1);
});

function init_animationLoad() {
	var loader = document.querySelector('#loader.animationLoad');
	loader.classList.remove('animationLoad');
	loader.offsetWidth;
  	loader.classList.add("animationLoad");
}

function displaySlide(n)
{
  	init_animationLoad();
	var x = document.querySelectorAll('#CTA li');
	var imgBackground = document.getElementById('slides');
	if (n > x.length)
		indexSlide = 1;
	if (n < 1)
		indexSlide = x.length;
	for (var i = 0; i < x.length; i++)
		x[i].style.display = "none";
	imgBackground.className = "slide" + indexSlide + " header-mobile";
	x[indexSlide - 1].style.display = "block";
}

