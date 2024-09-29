const playButtons = document.querySelectorAll('.playbutton');
        playButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const audioSrc = this.getAttribute('data-audio');
                const audio = new Audio(audioSrc);
                audio.play();
            });
        });

const pokemons = {
    "Glaceon": {
        "Height": "1.0 m",
        "Weight": "25.9 kg",
        "Base Stats": {
            "HP": 65,
            "Attack": 60,
            "Defense": 110,
            "Speed": 65
        },
        "Abilities": ["Ice Body", "Snow Cloak"],
        "Moves": ["Ice Beam", "Snow Cloak", "Aurora Beam", "Blizzard"],
        "Color": "Blue",
        "Shape": "Quadruped",
        "Location": ["Ice Cave", "Frosty Forest"],
        "Egg Groups": ["Field", "Fairy"]
    },
    "Vaporeon": {
        "Height": "1.0 m",
        "Weight": "29.0 kg",
        "Base Stats": {
            "HP": 130,
            "Attack": 65,
            "Defense": 60,
            "Speed": 60
        },
        "Abilities": ["Water Absorb", "Hydration"],
        "Moves": ["Surf", "Water Gun", "Hydro Pump", "Aqua Ring"],
        "Color": "Blue",
        "Shape": "Quadruped",
        "Location": ["Seafoam Islands", "Cave of Origin"],
        "Egg Groups": ["Field", "Water 1"]
    },
    "Flareon": {
        "Height": "0.9 m",
        "Weight": "25.0 kg",
        "Base Stats": {
            "HP": 65,
            "Attack": 130,
            "Defense": 60,
            "Speed": 65
        },
        "Abilities": ["Flash Fire", "Guts"],
        "Moves": ["Fire Spin", "Flamethrower", "Fire Blast", "Overheat"],
        "Color": "Orange",
        "Shape": "Quadruped",
        "Location": ["Fiery Path", "Pokémon Mansion"],
        "Egg Groups": ["Field", "Human-Like"]
    },
    "Jolteon": {
        "Height": "0.8 m",
        "Weight": "24.5 kg",
        "Base Stats": {
            "HP": 65,
            "Attack": 110,
            "Defense": 60,
            "Speed": 130
        },
        "Abilities": ["Volt Absorb", "Quick Feet"],
        "Moves": ["Thunder Shock", "Thunderbolt", "Volt Tackle", "Thunder"],
        "Color": "Yellow",
        "Shape": "Quadruped",
        "Location": ["Power Plant", "Route 10"],
        "Egg Groups": ["Field", "Human-Like"]
    },
    "Espeon": {
        "Height": "0.9 m",
        "Weight": "26.5 kg",
        "Base Stats": {
            "HP": 65,
            "Attack": 65,
            "Defense": 60,
            "Speed": 110
        },
        "Abilities": ["Synchronize", "Magic Bounce"],
        "Moves": ["Psybeam", "Psychic", "Future Sight", "Psyshock"],
        "Color": "Purple",
        "Shape": "Quadruped",
        "Location": ["Ecruteak City", "Hollow"],
        "Egg Groups": ["Field", "Human-Like"]
    },
    "Umbreon": {
        "Height": "1.0 m",
        "Weight": "27.0 kg",
        "Base Stats": {
            "HP": 95,
            "Attack": 65,
            "Defense": 110,
            "Speed": 65
        },
        "Abilities": ["Synchronize", "Inner Focus"],
        "Moves": ["Bite", "Faint Attack", "Dark Pulse", "Shadow Ball"],
        "Color": "Black",
        "Shape": "Quadruped",
        "Location": ["Dark Cave", "Route 29"],
        "Egg Groups": ["Field", "Human-Like"]
    },
    "Leafeon": {
        "Height": "1.0 m",
        "Weight": "25.0 kg",
        "Base Stats": {
            "HP": 65,
            "Attack": 110,
            "Defense": 130,
            "Speed": 95
        },
        "Abilities": ["Leaf Guard", "Chlorophyll"],
        "Moves": ["Leaf Blade", "Solar Beam", "Petal Dance", "Synthesis"],
        "Color": "Green",
        "Shape": "Quadruped",
        "Location": ["Ilex Forest", "Route 3"],
        "Egg Groups": ["Field", "Fairy"]
    },
    "Sylveon": {
        "Height": "1.0 m",
        "Weight": "23.5 kg",
        "Base Stats": {
            "HP": 95,
            "Attack": 65,
            "Defense": 65,
            "Speed": 60
        },
        "Abilities": ["Cute Charm", "Pixilate"],
        "Moves": ["Moonblast", "Fairy Wind", "Dazzling Gleam", "Hyper Voice"],
        "Color": "Pink",
        "Shape": "Quadruped",
        "Location": ["Santalune Forest", "Route 4"],
        "Egg Groups": ["Field", "Fairy"]
    },
    "Snorlax": {
        "Height": "2.1 m",
        "Weight": "460.0 kg",
        "Base Stats": {
            "HP": 160,
            "Attack": 110,
            "Defense": 65,
            "Speed": 30
        },
        "Abilities": ["Immunity", "Thick Fat"],
        "Moves": ["Body Slam", "Rest", "Sleep Talk", "Snore"],
        "Color": "Green",
        "Shape": "Quadruped",
        "Location": ["Route 12", "Route 16"],
        "Egg Groups": ["Monster", "Field"]
    },
    "Charizard": {
        "Height": "1.7 m",
        "Weight": "90.5 kg",
        "Base Stats": {
            "HP": 78,
            "Attack": 84,
            "Defense": 78,
            "Speed": 100
        },
        "Abilities": ["Blaze", "Solar Power"],
        "Moves": ["Flamethrower", "Fire Spin", "Dragon Breath", "Air Slash"],
        "Color": "Orange",
        "Shape": "Quadruped",
        "Location": ["Cinnabar Island", "Victory Road"],
        "Egg Groups": ["Monster", "Dragon"]
    },
    "Pikachu": {
        "Height": "0.4 m",
        "Weight": "6.0 kg",
        "Base Stats": {
            "HP": 35,
            "Attack": 55,
            "Defense": 40,
            "Speed": 90
        },
        "Abilities": ["Static", "Lightning Rod"],
        "Moves": ["Thunder Shock", "Quick Attack", "Electro Ball", "Volt Tackle"],
        "Color": "Yellow",
        "Shape": "Quadruped",
        "Location": ["Viridian Forest", "Power Plant"],
        "Egg Groups": ["Field", "Fairy"]
    },
    "Bulbasaur": {
        "Height": "0.7 m",
        "Weight": "6.9 kg",
        "Base Stats": {
            "HP": 45,
            "Attack": 49,
            "Defense": 49,
            "Speed": 45
        },
        "Abilities": ["Overgrow", "Chlorophyll"],
        "Moves": ["Vine Whip", "Razor Leaf", "Solar Beam", "Sweet Scent"],
        "Color": "Green",
        "Shape": "Quadruped",
        "Location": ["Route 1", "Cerulean City"],
        "Egg Groups": ["Monster", "Grass"]
    },
    "Squirtle": {
        "Height": "0.5 m",
        "Weight": "9.0 kg",
        "Base Stats": {
            "HP": 44,
            "Attack": 48,
            "Defense": 65,
            "Speed": 43
        },
        "Abilities": ["Torrent", "Rain Dish"],
        "Moves": ["Water Gun", "Bubble", "Hydro Pump", "Aqua Jet"],
        "Color": "Blue",
        "Shape": "Quadruped",
        "Location": ["Route 24", "Cerulean City"],
        "Egg Groups": ["Monster", "Water 1"]
    },
    "Charmander": {
        "Height": "0.6 m",
        "Weight": "8.5 kg",
        "Base Stats": {
            "HP": 39,
            "Attack": 52,
            "Defense": 43,
            "Speed": 65
        },
        "Abilities": ["Blaze", "Solar Power"],
        "Moves": ["Ember", "Flamethrower", "Fire Spin", "Dragon Rage"],
        "Color": "Orange",
        "Shape": "Quadruped",
        "Location": ["Route 3", "Indigo Plateau"],
        "Egg Groups": ["Monster", "Dragon"]
    },
    "Jigglypuff": {
        "Height": "0.5 m",
        "Weight": "5.5 kg",
        "Base Stats": {
            "HP": 115,
            "Attack": 45,
            "Defense": 50,
            "Speed": 20
        },
        "Abilities": ["Cute Charm", "Competitive"],
        "Moves": ["Sing", "Pound", "Body Slam", "Play Nice"],
        "Color": "Pink",
        "Shape": "Squiggle",
        "Location": ["Route 7", "Viridian Forest"],
        "Egg Groups": ["Fairy", "Human-Like"]
    },
}
const dark = document.querySelector('.dark');
function detail(pokemonName) {
    dark.style.display="none";
    const pokemon = pokemons[pokemonName];
    if (pokemon) {
        document.getElementById('pokemonName').innerText = pokemonName;
        document.getElementById('pokemonImage').src = `images/${pokemonName.toLowerCase()}.png`; // Assuming the image name matches the Pokémon name in lowercase
        let details = `
            <strong>Height:</strong> ${pokemon.Height}<br>
            <strong>Weight:</strong> ${pokemon.Weight}<br>
            <strong>Base Stats:</strong> HP: ${pokemon["Base Stats"].HP}, Attack: ${pokemon["Base Stats"].Attack}, Defense: ${pokemon["Base Stats"].Defense}, Speed: ${pokemon["Base Stats"].Speed}<br>
            <strong>Abilities:</strong> ${pokemon.Abilities.join(', ')}<br>
            <strong>Moves:</strong> ${pokemon.Moves.join(', ')}<br>
            <strong>Color:</strong> ${pokemon.Color}<br>
            <strong>Shape:</strong> ${pokemon.Shape}<br>
            <strong>Location:</strong> ${pokemon.Location.join(', ')}<br>
            <strong>Egg Groups:</strong> ${pokemon["Egg Groups"].join(', ')}<br>
        `;
        document.getElementById('pokemonDetails').innerHTML = details;
        document.querySelector('.details').style.display = 'flex';
    }
}
