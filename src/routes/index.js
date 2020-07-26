import header from "../templates/header.js"
import home from "../pages/home.js"
import character from "../pages/character.js"
import error404 from "../pages/error404.js"
import getHash from "../utils/getHash.js"
import resolveRoutes from "../utils/resolveRoutes.js"

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
    let render = ROUTES[route] ? ROUTES[route] : error404;
    CONTENT_HTML.innerHTML = await render()
}

export default router