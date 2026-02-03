import pokemons from "./pokemons.js";

const search = document.querySelector(".search");
const kartochki = document.querySelector(".kartochki");
const Sortselect = document.querySelector(".btn");

function generator(massiv) {
  kartochki.innerHTML = "";

  massiv.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");

    newDiv.innerHTML = `
        <h2>${element.name}</h2>
        <img src="${element.img}" alt="${element.name}">
        <span class="type">${element.type}</span>
        <span class="ves">${element.weight} kg</span>
    `;

    kartochki.appendChild(newDiv);
  });
}

generator(pokemons);

search.addEventListener("input", () => {
  let inputSearchValue = search.value.toLowerCase().trim();

  let filteredPokemons = pokemons.filter((element) =>
    element.name.toLowerCase().includes(inputSearchValue),
  );

  console.log(filteredPokemons);
  generator(filteredPokemons);
});

const sortSelect = document.querySelector(".sort");

sortSelect.addEventListener("change", () => {
  let value = sortSelect.value;
  let sorted = [...pokemons];

  if (value === "A-Z") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === "Z-A") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  } 

  generator(sorted);
});
