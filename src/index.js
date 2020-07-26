import router from "./routes/index.js"

window.addEventListener('load', router) //listener por si se recarga la pagina
window.addEventListener('hashchange', router) //listener por si cambia el hash