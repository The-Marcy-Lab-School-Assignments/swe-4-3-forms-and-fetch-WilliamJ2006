import { renderPokemon, renderError, renderSuccess } from "./dom-helpers";
import { getRandomPokemon, postDiscoveredPokemon } from "./fetch-helpers";
const button = document.querySelector('#discover-button')
const form = document.querySelector('form');

async function getAndRenderPokemon() {
  const pokemon = await getRandomPokemon();

  if(pokemon.error) {
    renderError(pokemon.error);
    return;
  }

  renderPokemon(pokemon.data);
  renderSuccess(`${pokemon.data.name} was discovered!`);
}

getAndRenderPokemon();

button.addEventListener(('click'), () => {
  getAndRenderPokemon();
})

form.addEventListener(('submit'), async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = {
    name: formData.get('name'),
    types: formData.get('types'),
    isFavorite: Boolean(formData.get('isFavorite'))
  }
  const data = await postDiscoveredPokemon(formValues);
  if(data.error){
    renderError(`Error: unable to capture Pokémon. Please try again later`);
    return;
  }
  renderSuccess(`${formValues.name} has been captured!`)
  form.reset();
})

