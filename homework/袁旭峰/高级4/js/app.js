requirejs.config({
    baseUrl: "./js",
    paths: {
        'jquery': "lib/jquery-3.2.0",
    }
})

requirejs(['app/index'])