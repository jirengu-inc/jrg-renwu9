







     requirejs.config({
         baseUrl:"./src/js",
         paths:{
             'jquery':'./lib/jquery'
         }
     });
     requirejs(['app/sub']);
