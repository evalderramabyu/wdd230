const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let divDate = document.createElement("div");
  let divPlace = document.createElement("div");
  let portrait = document.createElement('img');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  divDate.textContent = `Birth Date: ${prophet.birthdate}`;
  divPlace.textContent = `Birth Place: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);
  let prothetDetails = `${prophet.name} ${prophet.lastname} - ${prophet.order}${getOrdinalSuffix(prophet.order)} Latter-day President`
  portrait.setAttribute('alt', `Portait of ${prothetDetails}`);
  portrait.setAttribute('title', prothetDetails);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(divDate);
  card.appendChild(divPlace);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

function getOrdinalSuffix(day) {
  if (/^[2-3]?1$/.test(day)) {
    return 'st';
  } else if(/^[2-3]?2$/.test(day)) {
    return 'nd';
  } else if(/^[2-3]?3$/.test(day)) {
    return 'rd';
  } else {
    return 'th';
  }
}