function randomize() {
    var randomtheme = [
        'universe.css'
    ];

    document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href=/assets/css/' + randomtheme[Math.floor(Math.random()*randomtheme.length)] + ' id=themecss>');
}

if (window.localStorage.getItem('unitheme')) {
    theme = window.localStorage.getItem('unitheme');
    if (theme === "random") {
        randomize();
    } else {
        document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href=/assets/css/' + theme + ' id=themecss>');
    }
}
