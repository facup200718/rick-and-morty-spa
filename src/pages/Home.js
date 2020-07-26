import getData from "../utils/getData"

const home = async () => { 
    const CHARACTERS = await getData()
    const VIEW = ` 
        <div id="character">
            ${CHARACTERS.results.map(character => `
                 <article id="character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `
    return VIEW
}

export default home; 