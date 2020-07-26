const API = "https://rickandmortyapi.com/api/character/"

const getData = async (id) => {
    const API_URL = id ? `${API}${id}` : API;

    try {
        const RESPONSE = await fetch(API_URL) //Conseguimos la info 
        const DATA = await RESPONSE.json() //Le damos formato
        return DATA
    } catch (error) {
        console.log("Error en el fetch", error)
    }
}

export default getData