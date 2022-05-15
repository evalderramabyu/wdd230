const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
document.querySelector('.current-date').innerHTML = fulldateUK;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

document.querySelector('.current-year').innerHTML = new Date().getFullYear();
document.querySelector('.last-modified').innerHTML = document.lastModified;
