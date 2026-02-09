export async function getRandomPokemon() {
    try {
        const randomId = Math.ceil(Math.random() * 150);
        const newPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        if(!newPokemon.ok) {
            throw new Error(`Failed to fetch pokemon!`)
        }

        const pokemonData = await newPokemon.json();

        const pokemonObj = {
            name: pokemonData.species.name,
            types: pokemonData.types.map(obj => obj.type.name).join(', '),
            sprite: pokemonData.sprites.front_default,
        };

        return { data: pokemonObj, error: null };
    }
    catch(error) {
        return { data: null, error: error }
    }
}

export async function postDiscoveredPokemon(formData) {
    try {
        const response = await fetch("https://formspree.io/f/xkovgjqp", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed");
        }
        
        const responseData = await response.json();
        return { data: responseData, error: null };
    }
    catch(error) {
        return { data: null, error: error };
    }
}