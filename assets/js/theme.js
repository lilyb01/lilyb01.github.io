function randomize() {
    var randomtheme = [
        'weather_heypumpkin.css',
        'weather_winter.css',
        'weather.css',
        'weather_summer.css',
        'weather_fall.css',
        'weather_purple.css'
    ];

    document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href=/assets/css/' + randomtheme[Math.floor(Math.random()*randomtheme.length)] + ' id=themecss>');
}

if (document.cookie.indexOf("theme=") >= 0) {
    console.log("jesse we have to cook");
    var cook = document.cookie.split('; ');
    for (var i = 0; i < cook.length; i++) {
        name = cook[i].split('=')[0];
        if (name === "theme") {
            theme = cook[i].split('=')[1];
        }
    }
    document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.localStorage.setItem('theme', theme);
}

if (window.localStorage.getItem('theme')) {
    theme = window.localStorage.getItem('theme');
    if (theme === "random") {
        randomize();
    } else {
        document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href=/assets/css/' + theme + ' id=themecss>');
    }
} else {
    randomize();
}

// using cookies was such a bad idea lmao
// i initially used cookies bc of browser compatibility but the javascript literally doesn't work with pre-ie8 browsers anyway? so why bother, especially when 99.9% of website visitors are going to be using, you know, a modern browser? and now im rambling in the html comments again lol im going to be quiet now
//
//if (document.cookie.indexOf("theme=") >= 0) {
//    var cook = document.cookie.split('; ');
//    for (var i = 0; i < cook.length; i++) {
//        name = cook[i].split('=')[0];
//        if (name === "theme") {
//            theme = cook[i].split('=')[1];
//        }
//    }
//    if (theme === "random") {
//        randomize();
//    } else {
//        document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href={{ site.baseurl }}/assets/css/' + theme + ' id=themecss>');
//    }
//} else {
//    randomize();
//}