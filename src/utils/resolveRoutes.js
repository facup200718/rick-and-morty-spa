//ESTE SCRIPT NOS ENVIA A LA RUTA CUYA DATA LE LLEGA
const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute
        if (route === "/") {
            validRoute = route
        } else {
            validRoute = "/:id"
        }
        return validRoute
    } 
    return `/${route}` // esto nos va a retornar '/about'
}

export default resolveRoutes