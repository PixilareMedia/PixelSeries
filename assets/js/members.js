document.addEventListener("DOMContentLoaded", startUp);
//Variables
var ALL;
var PCs1;
var PCs2;
var PCs3;
var PCs4;
var PCs5;
var PMs1;
var PMs2;
var PMs3;
var PMs4;
//Setup for the Members Page
function startUp() {
    //Assigning Variables to Elements
    ALL = document.getElementById("ALL");
    PCs1 = document.getElementById("cs1");
    PCs2 = document.getElementById("cs2");
    PCs3 = document.getElementById("cs3");
    PCs4 = document.getElementById("cs4");
    PCs5 = document.getElementById("cs5");
    PMs1 = document.getElementById("ms1");
    PMs2 = document.getElementById("ms2");
    PMs3 = document.getElementById("ms3");
    PMs4 = document.getElementById("ms4");
    //Changing the Display value of the Elements
    ALL.style.display = "none";
    PCs1.style.display = "none";
    PCs2.style.display = "none";
    PCs3.style.display = "none";
    PCs4.style.display = "none";
    PCs5.style.display = "block";
    PMs1.style.display = "none";
    PMs2.style.display = "none";
    PMs3.style.display = "none";
    PMs4.style.display = "none";
    //Checking For Valid URL Anchor
    anchorCheck();
}
//Set all Elements to be Hidden
function hideBlocks() {
    ALL.style.display = "none";
    PCs1.style.display = "none";
    PCs2.style.display = "none";
    PCs3.style.display = "none";
    PCs4.style.display = "none";
    PCs5.style.display = "none";
    PMs1.style.display = "none";
    PMs2.style.display = "none";
    PMs3.style.display = "none";
    PMs4.style.display = "none";
}
//Change Display of One Element
function openClose(name) {
    hideBlocks();
    if(name.style.display === "none") {
        name.style.display = "block";
    } else {
        name.style.display = "none";
    }
}