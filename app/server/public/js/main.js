require.config({
    baseUrl: "/js/lib/",
    paths: {
        "jquery": "/js/vendor/jquery/dist/jquery.min",
        "underscore": "/js/vendor/underscore/underscore-min",
        "knockout": "/js/vendor/knockout/build/output/knockout-latest",
        "domReady": "/js/vendor/domReady/domReady",
        "text": "/js/vendor/text/text"
    }
});

require(['dashboard'], function (dashboard) {
    console.log('require dashboard');
});
