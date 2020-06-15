Para configurar una variable de entorno en heroku:
>$ heroku config:set PORT=3333

En el proyecto para ejecutar la aplicacion se ejecuta:
>"start_local": "nodemon -r dotenv/config app.js"
Entonces el -r dotenv/config me permite leer las variables en en el 
process.env.{VARIABLE} (Obviamente sin las "{}") localmente, pero cuando se 
suba a produccion el servidor ejecuta es el comando "node server.js" entonces
hay que setear las variables en el ambiente de produccion y ya se leerian normalmente.