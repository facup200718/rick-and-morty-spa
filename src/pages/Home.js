const home = () => { //Template base de cada personaje
    const VIEW = `
        <div id="characters">
            <article id="character-item">
                <a href="#/1/">
                    <img src="image" alt="name">
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    ` 
    return VIEW
}

export default home; //Lo exportamos para verificar que se pueda usar dentro de otros archivos de js