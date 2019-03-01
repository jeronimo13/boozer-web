function fullScreen() {
  // Kind of painful, but this is how it works for now
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function smolScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function lock(orientation) {
  fullScreen();
  screen.orientation.lock(orientation);
}


screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

if (screen.lockOrientationUniversal("landscape-primary")) {
  // Orientation was locked
} else {
  // Orientation lock failed
}
$(window).resize(function(){  //event onWindowResize
    if($(window).width() < $(window).height()) //So, portrait
        $("<div />").css({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
        }).addClass("locked-for-portrait").text("Please use our website in landscape mode (turn your phone 90 degrees)").appendTo("body");  //add a fixed div over your page.
    else //So, landscape.
        $(".locked-for-portrait").remove(); //Remove the div - if it's on the page.
});

$(document).ready(function(){
    $(window).resize(); //trigger the resize once on pageload
});