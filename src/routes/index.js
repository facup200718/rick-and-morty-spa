import HEADER from "../templates/Header"
import HOME from "../pages/Home"
import CHARACTER from "../pages/Character"
import ERROR404 from "../pages/Error404"

const ROUTES = {
    '/': HOME,
    '/:id': CHARACTER,
    '/contact': 'Contact',
}

const ROUTER = async () => {
    const header = null || document.getElementById("header")
    const CONTENT = null || document.getElementById("content")

    header.innerHTML = await HEADER()
}

export default ROUTER