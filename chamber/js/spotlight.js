const requestURL = 'data/directory.json';

document.querySelector('.content.home .spotlights').innerHTML = '';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const companies = jsonObject['directory'];
    let spotlightCompanies = companies.filter(company => (company.membership_level == "Gold Membership" || company.membership_level == "Silver Membership") && company.email.length > 0 )
    spotlightCompanies.forEach(displayCompany);
  });

function displayCompany(company) {
  // Create elements to add to the document
  let card = document.createElement('div');
  let cardHeader = document.createElement('div');
  let logoCompany = document.createElement('img');
  let slogan = document.createElement('div');
  let emailCompany = document.createElement('div');
  let infoCompany = document.createElement('div');
  let phoneCompany = document.createElement('span')
  let webCompany = document.createElement('a')

  cardHeader.classList.add("header");
  cardHeader.textContent = company.name;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logoCompany.setAttribute('src', `images/directory/${company.image}`);
  logoCompany.setAttribute('alt', `Logo of ${company.name}`);
  logoCompany.classList.add("logo-company");
  logoCompany.setAttribute('loading', 'lazy');

  slogan.classList.add("subtitle");
  slogan.textContent = company.slogan;

  emailCompany.classList.add("text-info");
  emailCompany.textContent = company.email;
  emailCompany.setAttribute('title', company.email);

  phoneCompany.textContent = company.phone_number + " | ";

  webCompany.setAttribute('href', company.website);
  webCompany.setAttribute('target', "_blank");
  webCompany.textContent = 'Website';

  infoCompany.classList.add("text-info");
  infoCompany.appendChild(phoneCompany);
  infoCompany.appendChild(webCompany);


  // Add/append the section(company) with img, h2 and four p element.
  card.appendChild(cardHeader);
  card.appendChild(logoCompany);
  card.appendChild(slogan);
  card.appendChild(emailCompany);
  card.appendChild(infoCompany);


  // Add/append the existing HTML div with the directory_box class with the section(company)
  document.querySelector('.content.home .spotlights').appendChild(card);
}