# Notas sobre el uso de NPM
Para crear un proyecto con npm se ejecuta el comando `npm init` estando ubicados en el directorio donde deseamos agregar los artefactos del proyecto

## Instalando paquetes
Vamos a instalar los siguientes paquetes:
### [Yargs](https://www.npmjs.com/package/yargs)
Este paquete nos sirve para crear la interfaz de **help** del proyecto y para poder recibir de mejor forma los argumentos por **línea de comandos**.\
**Instalación**\
`npm install yags --save` Cuando se indica `--save`, indicamos que este paquete es necesario para el correcto funcionamiento del proyecto.
### [nodemon](https://www.npmjs.com/package/nodemon)
Este paquete nos sirve para ver los resultados de los cambios realizados en un archivo que estamos observando cada vez que realizamos un cambio en el mismo.\
**Instalación**\
`npm install --save-dev nodemon` cuando se indica `--save-dev`, indicamos que este paquete va a ser usado solo en ambiente de desarrollo.
### [colors](https://www.npmjs.com/package/colors)
Este paquete nos sirve para que la **linea de comandos** sea mas agradable a la vista.\
**Instalación**\
`npm install colors --save` 