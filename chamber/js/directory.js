/** Buttons grid and list **/
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
    gridbutton.classList.remove("active");
    listbutton.classList.add("active");
}



const requestURL = 'data/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing


    const companies = jsonObject['directory'];
    companies.forEach(displayCompany);
  });

function displayCompany(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let nameCompany = document.createElement('h3')
  let logoCompany = document.createElement('img');
  let addressCompany = document.createElement('p');
  let phoneCompany = document.createElement('p')
  let webCompany = document.createElement('a')
  let levelMember = document.createElement('p')


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logoCompany.setAttribute('src', `images/directory/${company.image}`);
  logoCompany.setAttribute('alt', `Logo of ${company.name}`);
  logoCompany.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2, p element to contain the name, address, phone, website and membership of the companies.
  nameCompany.textContent = company.name;
  addressCompany.textContent = company.address;

  phoneCompany.textContent = company.phone_number;
  phoneCompany.classList.add("phone-number");

  webCompany.setAttribute('href', company.website);
  webCompany.textContent = company.website;

  levelMember.textContent = company.membership_level;


  // Add/append the section(company) with img, h2 and four p element.
  card.appendChild(logoCompany);
  card.appendChild(nameCompany);
  card.appendChild(addressCompany);
  card.appendChild(phoneCompany);
  card.appendChild(webCompany);
  card.appendChild(levelMember);


  // Add/append the existing HTML div with the directory_box class with the section(company)
  document.querySelector('.directory article').appendChild(card);
}

