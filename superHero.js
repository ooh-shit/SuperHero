const URL = "https://superheroapi.com/api.php/"
const TOKEN ="903272097617408"

const ImageDiv = document.getElementById('img')
const Hname = document.getElementById('name')
const NewheroBut = document.getElementById('NewHero')
const SearchHero = document.getElementById("SearchHero")
const SearchInput = document.getElementById("SearchInput")
const img = document.getElementById("img")
const stats = document.getElementById("stats")
const grp  = document.getElementById("group")

getSuperHero = (id) =>
{
  
  fetch(`${URL}/${TOKEN}/${id}`)
  .then(Response => Response.json())
  .then(json => 
  {
    console.log(json)
    Hname.innerHTML = `<h1>${json.name}</h1>`
    Hname.className = "heading"
    ImageDiv.innerHTML = `<img src ="${json.image.url}" height = "400px" width = "400px"/>`
    SearchInput.value = ' '
    img.style.opacity = 0;
    setTimeout(function() {

      img.style.opacity = 1;
    }, 500);

    stats.innerHTML = `<ul style="list-style: none; font-size: 1.5rem;"><li>Combat: ${json.powerstats.combat}</li> <li>Strength: ${json.powerstats.strength}</li> </li> <li>Intelelignce: ${json.powerstats.intelligence}</li> </ul>`
    grp.innerHTML = `<h3>${json.biography.publisher}</h3>`
    grp.className = "group"
  
  })
}

getSearchHero = (name) =>
{
  console.log(SearchInput.value)
  fetch(`${URL}/${TOKEN}/search/${name}`)
  .then(Response => Response.json())
  .then(json => 
  {
    let hero = json.results[0]
    console.log(hero.name)
    Hname.innerHTML = `<h1>${hero.name}</h1>`
    
    ImageDiv.innerHTML = `<img src ="${hero.image.url}" height = "400px" width = "400px"/>`
    
    stats.innerHTML = `<ul style="list-style: none;  font-size: 2rem;"><li>Combat: ${hero.powerstats.combat}</li> <li>Strength: ${hero.powerstats.strength}</li> </li> <li>Intelelignce: ${hero.powerstats.intelligence}</li></ul>`
    grp.innerHTML = `<h3>${hero.biography.publisher}</h3>`

    img.style.opacity = 0;
    setTimeout(function() {
        img.style.opacity = 1;
    }, 500);

  })

}


NewHero.onclick = () => getSuperHero(Math.ceil(Math.random()*730));
SearchHero.onclick = () => getSearchHero(SearchInput.value)