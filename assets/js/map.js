//Get the height & width in px of the useable page.
let contentBox = document.querySelector('.content');
let contentHeight = contentBox.offsetHeight;
let contentWidth = contentBox.offsetWidth;

//Set the Map height & width in px to the useable height-104px.
document.getElementById("map").style.height = contentHeight-104 + "px";
document.getElementById("map").style.width = contentWidth + "px";

//Listen for the window resize event.
window.addEventListener('resize', function(event) {
    //Re-get the useable page height & width in px.
    var newContentHeight = contentBox.offsetHeight;
    var newContentWidth = contentBox.offsetWidth;

    //Re-set the Map height & width in px to the useable height-104px.
    document.getElementById("map").style.height = newContentHeight-104 + "px";
    document.getElementById("map").style.width = newContentWidth + "px";
})