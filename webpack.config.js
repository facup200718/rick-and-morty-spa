const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.

module.exports = {  //Acá está toda la configuración de lo que se va a ejecutar. Modulo para exportar.
    entry: './src/index.js', //Punto de entrada con la dirección. Acá está el código inicial donde arrancamos a desarrollar.
    output: { //Acá es donde se envía el proyecto estructurado y compilado.
        path: path.resolve(__dirname, 'dist'),  //Creamos el lugar dónde se va a exportar el proyecto.
        filename: 'main.js'//Este es el nombre del archivo final.
    },
    resolve: {
        extensions: ['.js'], //Extensiones que se van a usar.
    },
    module: { //Se crea un modulo con las reglas a usar.
        rules: [    //Reglas
            {   // Estructura de Babel
                test: /\,js?$/, //Nos permite identificar los archivos según se encuentran en el entorno.
                exclude: /node_modules/, //Excluimos la carpeta de node modules
                use: {
                    loader: 'babel-loader', //Utilizar un loader como configuración establecida.
                }
            }
        ]
    },
    plugins: [ //Se establecen los plugins que se van a usar
        new HtmlWebpackPlugin( //Te permite trabajar con los archivos HTML
            {
                inject: true, //Es verdadero que se va a inyectar un valor a un archivo HTML.
                template: './public/index.html', //Dirección donde se encuentra el archivo principal
                filename: './index.html'//El nombre que tendrá el archivo
            }
        )
    ]
}
