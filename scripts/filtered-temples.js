const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = `© ${currentYear}`;
}

const lastMod = document.getElementById('lastModified');
if (lastMod) {
    lastMod.textContent = `Last modified: ${document.lastModified}`;
}
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
  {
    templeName: "Mérida Mexico",
    location: "Mérida, Yucatan, Mexico",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-62899-main.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  },
  {
    templeName: "Tijuana Mexico",
    location: "Tijuana, Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
  },
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, December, 11",
    area: 21085,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg"
  },
];

templeCard(temples);

const homeTemples = document.querySelector("#home");
homeTemples.addEventListener("click", () => {
    templeCard(temples);
});
const olderTemples = document.querySelector("#old");
olderTemples.addEventListener("click", () => {
    templeCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
})
const newTemples = document.querySelector("#new");
newTemples.addEventListener("click", () => {
    templeCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
})
const largeTemples = document.querySelector("#large");
largeTemples.addEventListener("click", () => {
    templeCard(temples.filter(temple => temple.area > 90000));
})
const smallTemples = document.querySelector("#small");
smallTemples.addEventListener("click", () => {
    templeCard(temples.filter(temple => temple.area < 10000));
})

function templeCard(filterTemples) {
    document.querySelector(".img-grid").innerHTML = "";
    filterTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span>${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span>${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.style.width="100%"
        img.style.height="250px"
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".img-grid").appendChild(card);
    })
}