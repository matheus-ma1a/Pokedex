const namePoke = document.querySelector(".namePoke")
const indexPoke = document.querySelector(".indexPoke")
const typePoke = document.querySelector(".typePoke")
const imgPoke = document.querySelector(".imgPoke")
const procurarPoke = document.querySelector(".serchPoke")
const btn = document.querySelector(".btn")  


btn.addEventListener("click", (e) => {
    e.preventDefault()
    mostraPokemos(procurarPoke.value)
})

const getPokemon = async function (value) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`) 
    return res.json()
} 

const mostraPokemos = async function(value = 1){
    const pokemos = await getPokemon(value)
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemos.id}.svg`
    
    namePoke.innerText =  pokemos.name
    indexPoke.innerText =  `#${pokemos.id} `
    typePoke.innerText = `${pokemos.types.map(Element => Element.type.name ).join("  |  ")}`
    imgPoke.src = urlImage;
}

mostraPokemos()

console.log(procurarPoke);