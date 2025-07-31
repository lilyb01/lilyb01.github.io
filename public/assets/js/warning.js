if (!window.localStorage.getItem('warning')) {
    document.getElementById("warning").style.display = "block";
    window.localStorage.setItem('warning', "oh_no");
}