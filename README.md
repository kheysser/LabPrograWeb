# LabPrograWeb
Laboratorio que trata sobre el uso de gulp y agregar nuevas funciones como minificar los archivos js y css que integran el laboratorio

Incluye el uso de tasks para la automatización de tareas en un entorno web, las tareas que tiene incluidas son: 
  - Ejecución de servidor
  - Compilador de estilos
  - Minificación de archivos css y js (Agregadas recientemente)
  - Sincronización de cambios con el navegador

Instalación:
  - Inicializar los comandos que minimizan los archivos js y css los cuales son:
          * npm install --save-dev gulp-uglify (minimiza los archivos js)
          * npm install --save-dev gulp-minify-css (minimiza los archivos css)
  - Ejecutar gulp:
          * gulp

Detalle de tasks agregadas recientemente:
  - Se importaron los paquetes con los cuales se iban a trabajar, estos son:
          * const uglify = require('gulp-uglify');
          * const minifycss = require('gulp-minify-css');
  - Se agregaron a las constantes de trabajo nuevas direcciones:
          * jsPath: src/**/*.js
          * cssPath: src/**/*.css
  - Se agregaron dos nuevas funciones llamadas:
          * minifyJsTask()
          * minifyCssTask()
  
