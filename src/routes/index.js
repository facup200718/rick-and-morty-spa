import header from "../templates/header"
import home from "../pages/home"
import character from "../pages/character"
import error404 from "../pages/error404"
import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"

const ROUTES = {
    '/': home,
    '/:id': character,
    '/contact': 'Contact',
}

const router = async () => {
    const HEADER_HTML = null || document.getElementById("header")
    const CONTENT_HTML = null || document.getElementById("content")

    HEADER_HTML.innerHTML = await header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render 
    if (ROUTES[route]) {
        render = ROUTES[route]
    } else {
        render = error404
    }
    CONTENT_HTML.innerHTML = await render()
}

export default router