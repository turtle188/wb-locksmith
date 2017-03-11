var navElem = document.querySelectorAll(".menu li");
navElem[0].addEventListener("click", function() {
	toggleNav(navElem, 0);
});
navElem[1].addEventListener("click", function() {
	toggleNav(navElem, 1);
});
navElem[2].addEventListener("click", function() {
	toggleNav(navElem, 2);
});
navElem[3].addEventListener("click", function() {
	toggleNav(navElem, 3);
});
navElem[4].addEventListener("click", function() {
	toggleNav(navElem, 4);
});

function toggleNav(elem, x)
{
	elem[x].classList.toggle('active');
}