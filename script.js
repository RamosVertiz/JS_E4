const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const CardContainer = document.querySelector(".CardContainer");
const formulario = document.getElementById("formulario");
const idPoke = document.getElementById("ID");

const renderPokemon = (pokemon) => {
    // creamos la función para renderizar los pokemones
    const { id, name, sprites, height, weight, types } = pokemon;
    console.log(pokemon);
    return ` 
      <div class="poke"> 
      
          <img  src="${sprites.other.home.front_default}"/>
          <p class="id-poke">ID#${id}</p>
          <h2>${name.toUpperCase()}</h2>
          
          <div class="tipo-poke">
              ${types
                .map((tipo) => {
                  return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
                })
                .join("")}
          </div>
          
          <p class="height">Height: ${height / 10}m</p>
          <p class="weight">Weight: ${weight / 10}Kg</p>
      </div>
    `;
  };

  const renderPokemons = (pokeElegido) => {
  
  
    CardContainer.innerHTML = renderPokemon(pokeElegido); 
  };



const fetchPokemons = async () => {
    const URLid = baseURL + idPoke.value;
    const res = await fetch(`${URLid}`); 
    const data = await res.json(); 
    return data; 
  };


  function init() {
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log(idPoke);
  
      if (idPoke.value <=0) {
        formulario.reset();
        return alert("Elegí un numero mayor a 0");
      } ;
      
      let results = await fetchPokemons();
      renderPokemons(results);
    });
  }
  
 
  init();


//no puede encontar cual es el ultimo URL en la API