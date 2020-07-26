import getHash from "../utils/getHash"
import getData from "../utils/getData"

const character = async () => {
    const ID = getHash()
    const CHARACTER = await getData(ID)
    const VIEW = `
     <div id="character-inner">
         <article class="character-card">
             <img src="${CHARACTER.image}" alt="${CHARACTER.name}">
             <h2>${CHARACTER.name}</h2>
         </article>
         <article class="character-card">
             <h3>Episodes: <span>${CHARACTER.episode.length}</span> </h3>
             <h3>Status: <span>${CHARACTER.status}</span></h3>
             <h3>Species: <span>${CHARACTER.species}</span></h3>
             <h3>Gender: <span>${CHARACTER.gender}</span></h3>
             <h3>Origin: <span>${CHARACTER.origin.name}</span></h3>
             <h3>Last location: <span>${CHARACTER.location.name}</span></h3>
         </article>
     </div>
    `
    return VIEW
}

export default character