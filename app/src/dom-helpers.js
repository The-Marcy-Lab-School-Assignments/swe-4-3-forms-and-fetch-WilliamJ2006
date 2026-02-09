const ul = document.querySelector('#discovered-list')
const errorMsg = document.querySelector('#error');
const successMsg = document.querySelector('#success');

export function renderPokemon(pokemonObj) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const types = document.createElement('p');
    const img = document.createElement('img');

    img.src = pokemonObj.sprite;
    img.alt = pokemonObj.name;
    name.textContent = pokemonObj.name;
    types.textContent = pokemonObj.types;

    li.append(img, name, types);
    ul.prepend(li);
}

export function renderError(msg) {
    errorMsg.textContent = msg;
    successMsg.textContent = '';
}

export function renderSuccess(msg) {
    successMsg.textContent = msg;
    errorMsg.textContent = '';
}