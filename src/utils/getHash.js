const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
export default getHash
//slice saca el "#"
//toLocaleLowerCase pone todo en minuscula x si acaso
//split crea un array y elimina en este caso el slash 
//el split deja un array asi x ej ["","1",""], por eso selecciono la posicion 1
//el or al final es para mandarnos al home en caso de que no haya ningun personaje con ese hash