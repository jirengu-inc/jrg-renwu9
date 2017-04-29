 requirejs.config({
     baseUrl: 'src/js',
     paths: {
         'jquery': 'lib/jquery'
     }
 })

 /**入口**/
 requirejs(['app/index'])