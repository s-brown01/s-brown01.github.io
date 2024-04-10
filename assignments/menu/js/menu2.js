function openNav() {
    // 100vw = 100% of the viewport width - Google
    if (screen.width < 768) {
        document.getElementById("sideMenu").style.width = "100vw";
        document.getElementById("sideMenu").style.padding = "1rem";

    }
    else {
        document.getElementById("sideMenu").style.width = "33vw";
        document.getElementById("sideMenu").style.padding = "2rem";
    }

}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("sideMenu").style.padding = "0";

}