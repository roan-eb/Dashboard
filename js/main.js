let gegevens = fetch("data.json")
    .then(function(response){
        return response.json();
    }).then(function(echtedata){
        const chart1 = echtedata.data
        const labels = [
            "Playstation 3",
            "Playstation 4",
            "Wii U",
            "Nitendo DS"
        ];
        
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Most played consoles in hours",
                    data: chart1,
                    backgroundColor: ['#FF6B6B', '#4D96FF', '#FFD93D', '#6BCB77']
                }
            ]
        }
        const config = {
            type: 'doughnut',
            data: data,
        }
        
        const config3 = {
            type: 'pie',
            data: data,
        }
        const myChart1 = new Chart( 
            document.getElementById("js--chart--1"),
            config
        )
        const myChart3 = new Chart( 
            document.getElementById("js--chart--3"),
            config3
        )
});

// right chart 
function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
    ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 
    'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 
    'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'];

    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1;
                        break;
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
                    case "flying":
                        flying = flying + 1;
                        break;
                    case "poison":
                        poison = poison + 1;
                        break;
                    case "ground":
                        ground = ground + 1;
                        break;
                    case "rock":
                        rock = rock + 1;
                        break;
                    case "bug":
                        bug = bug + 1;
                        break;
                    case "ghost":
                        ghost = ghost + 1;
                        break;
                    case "steel":
                        steel = steel + 1;
                        break;
                    case "fire":
                        fire = fire + 1;
                        break;
                    case "water":
                        water = water + 1;
                        break;
                    case "grass":
                        grass = grass + 1;
                        break;
                    case "electric":
                        electric = electric + 1;
                        break;
                    case "psychic":
                        psychic = psychic + 1;
                        break;
                    case "ice":
                        ice = ice + 1;
                        break;
                    case "dragon":
                        dragon = dragon + 1;
                        break;
                    case "dark":
                        dark = dark + 1;
                        break;
                    case "fairy":
                        fairy = fairy + 1;
                        break;
                    case "unknown":
                        unknown = unknown + 1;
                        break;
                    case "shadow":
                        shadow = shadow + 1;
                        break;
                }
            }).then(function(){
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug, 
                    ghost, steel, fire, water, grass, electric, psychic, 
                    ice, dragon, dark, fairy, unknown, shadow];
                graph.update();
            });
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokémon types",
                data: [],
                backgroundColor: ['#FF6B6B', '#4D96FF', '#FFD93D', '#6BCB77', '#F473B9']
            }
        ]
    }

    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    }
   const graph = new Chart (document.getElementById("js--chart--2"), configPokemon);

}

getPokemon();

// clock
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

setInterval(() => {
    var date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    var spans = document.querySelectorAll('span');
    spans.forEach((span) => {
        if (span.innerHTML.length == 1) {
            span.innerHTML = `0${span.innerHTML}`;
        }
    })
}, 100);

// stopwatch
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

function timer() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}