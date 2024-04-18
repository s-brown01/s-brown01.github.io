function openNav() {
  // 100vw = 100% of the viewport width - Google
  // WS school was window.innerWindow is how wide the actual website is
  // 600 because this only determines how large the sideMenu is: looks weird going to 100vw with 600+ pixels
  if (window.innerWidth < 600) {
    document.getElementById("sideMenu").style.width = "100vw";
    document.getElementById("sideMenu").style.padding = "1rem";
  } else {
    // if the screen is above 600, have it go 40% of the screen
    document.getElementById("sideMenu").style.width = "40vw";
    document.getElementById("sideMenu").style.padding = "2rem";
  }
}

function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("sideMenu").style.padding = "0";
}
