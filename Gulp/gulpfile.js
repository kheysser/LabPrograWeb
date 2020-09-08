// Importar las funciones específicas de la API de gulp que vamos a utilizar
const { src, dest, series, parallel, watch } = require('gulp');

// Importar los paquetes con los que vamos a trabajar
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');

// Constantes de trabajo
const files = {
    scssPath: 'src/scss/**/*.scss',
    htmlPath: 'dist/**/*.html',
    jsPath: 'src/**/*.js',
    cssPath: 'src/**/*.css',
}

function helloWorldTask(result) {
    console.log("hello world! :D");
    result();
}

/**
 * Compilar los archivos de sass en estilos en cascada para el navegador (CSS)
 */
function scssTask() {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(dest('dist/css'));
}


/**
 * Observar cambios en los archivos de sass para compilarlos automaticamente
 */
function watchTask() {
    watch(
        [files.scssPath, files.htmlPath],
        series(scssTask, reloadTask)
    )
}


function serveTask(d) {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}


/**
 * nuevas funciones agregadas al gulp 
 */

 function minifyJsTask(d){
    return src(files.jsPath)
        .pipe(uglify())
        .pipe(dest('./dist/js'));
} 

function minifyCssTask(d){
    return src(files.cssPath)
        .pipe(minifycss())
        .pipe(dest('./dist/css'));
} 




function reloadTask(d) {
    browserSync.reload();
    d();
}

exports.default = series(scssTask, minifyJsTask, minifyCssTask, serveTask, watchTask);