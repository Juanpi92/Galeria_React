const usePokemon = async () => {
  let pokemons = [];
  try {
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
    if (!respuesta.ok) {
      throw "Error";
    }
    let respuesta_json = await respuesta.json();
    respuesta_json.results.forEach(async (element) => {
      let respuesta = await fetch(element.url);
      if (!respuesta.ok) {
        throw "Error";
      }
      let respuesta_json = await respuesta.json();
      pokemons.push({
        name: respuesta_json.name,
        url: respuesta_json.sprites.front_default,
      });
    });
  } catch (error) {
    console.log(error);
  }

  return pokemons;
};

export default usePokemon;
