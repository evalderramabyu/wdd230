var templeList = new Array();

function output(temples) {
  temples.forEach((temple) => {
    let article = document.createElement("article");

    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    let dedicated = document.createElement("h4");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    let location = document.createElement("h5");
    location.textContent = temple.location;

    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    let phone = document.createElement("span");
    phone.innerHTML = `Phone: <b>${temple.telephone}</b>`;

    let email = document.createElement("span");
    email.innerHTML = `Email: <b>${temple.email}</b>`;

    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);

    let servicesTitle = document.createElement("h6");
    servicesTitle.textContent = "Services:";

    let servicesContainer = document.createElement("div");
    servicesContainer.classList.add("services");

    let servicesUl = document.createElement("ul");

    temple.services.forEach(function (e) {
      let servicesLi = document.createElement("li");
      servicesLi.textContent = e;
      servicesUl.appendChild(servicesLi);
    });
    servicesContainer.appendChild(servicesUl)

    article.appendChild(templeName);
    article.appendChild(dedicated);
    article.appendChild(img);
    article.appendChild(location);
    article.appendChild(contactContainer);
    article.appendChild(servicesTitle);
    article.appendChild(servicesContainer);

    document.querySelector("#temples").appendChild(article);
  });
}

async function getTemples(url) {
  const response = await fetch("data/temples.json");
  if (response.ok) {
    templeList = await response.json();
    output(templeList);
  }
}
getTemples();