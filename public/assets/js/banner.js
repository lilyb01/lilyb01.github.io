function randomize() {
    var randombanner = [
        'symphony.png',
        'summer.png'
    ];

    document.getElementById("header").style.backgroundImage = "url('/assets/img/headers/" + randombanner[Math.floor(Math.random()*randombanner.length)] + "')";
}

if (window.localStorage.getItem('banner')) {
    theme = window.localStorage.getItem('banner');
    if (theme === "random") {
        randomize();
    } else {
        document.getElementById("header").style.backgroundImage = "url('/assets/img/headers/" + theme + "')";
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