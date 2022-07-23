const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// document.querySelector('.current-date').innerHTML = fulldateUK;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

document.querySelector('.current-year').innerHTML = new Date().getFullYear();

let day = now.getDay();
const banner = document.getElementById("banner");
if (day == 1 || day == 2) {
  banner.style.display = "block";
}


if (document.querySelector('.content.discover')) {
    //Lazy loading
    const imagesToLoad = document.querySelectorAll("img[data-src]");

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };

    const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => { image.removeAttribute('data-src'); };
    };

    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver(items => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    loadImages(item.target);
                    imgObserver.unobserve(item.target);
                }
            });
        }, imgOptions);

        imagesToLoad.forEach(img => imgObserver.observe(img));
    } else {
        imagesToLoad.forEach(img => {loadImage(img)});
    }

    ////Local storage
    //const userVisit = document.querySelector(".last-visit");

    //// get the stored value in localStorage
    //const lastVisit = localStorage.getItem("last_visit");

    //const currentTime = new Date().getTime();
    //const lastVisitInDays = lastVisit ? numberOfDays(currentTime, lastVisit) : 0;

    //if (lastVisitInDays > 0) {
    //time = lastVisitInDays > 1 ? 'days' : 'day';
    //    userVisit.textContent = `${lastVisitInDays} ${time} ago`;
    //} else {
    //    userVisit.textContent = 'Today';
    //}

    //localStorage.setItem("last_visit", currentTime);

    //function numberOfDays(date1, date2){
    //    return parseInt((date1 - date2) / 1000 / 3600 / 24);
    //}
}

if (document.querySelector('.content.thanks')) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const firstName = urlParams.get('first_name')
    document.querySelector('#first_name').innerHTML = firstName;
}

function formatTime(date) {
    let hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        hourFormatted = hour < 10 ? "0" + hour : hour,
        minuteFormatted = minute < 10 ? "0" + minute : minute,
        secondFormatted = second < 10 ? "0" + second : second;

    return hourFormatted + ":" + minuteFormatted + ":" + secondFormatted;
}
