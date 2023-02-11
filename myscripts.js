document.getElementById("leftbtn").onmousedown = function () {
    document.getElementById("homePage").className = " fadeOutLeft";
    let interval = setInterval(() => {
        document.getElementById("leftbtn").innerHTML = "Dé standard numérique";
        document.getElementById("rightbtn").innerHTML = "Dé customisé";
        document.getElementById("homePage").className = " fadeInRight";
        clearInterval(interval);
    }, 1300);
};

document.getElementById("arrowWrap").onmousedown = function () {
    console.log("CLICK");
    document.getElementById("homePage").className = " fadeOutRight";
    let interval = setInterval(() => {
        document.getElementById("leftbtn").innerHTML = "Créer dé";
        document.getElementById("rightbtn").innerHTML = "Utilisé dé existant";
        document.getElementById("homePage").className = " fadeInLeft";
        clearInterval(interval);
    }, 1300);
}