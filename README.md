Para configurar una variable de entorno en heroku:
>$ heroku config:set PORT=3333

En el proyecto para ejecutar la aplicacion se ejecuta:
>"start_local": "nodemon -r dotenv/config app.js"
Entonces el -r dotenv/config me permite leer las variables en en el 
process.env.{VARIABLE} (Obviamente sin las "{}") localmente, pero cuando se 
suba a produccion el servidor ejecuta es el comando "node server.js" entonces
hay que setear las variables en el ambiente de produccion y ya se leerian normalmente.

when the Elastic Beanstalk is config and deployed you can change to enable the load balancer you can follow the steps in:
>https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/using-features-managing-env-types.html#using-features.managing.changetype