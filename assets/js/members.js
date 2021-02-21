document.addEventListener("DOMContentLoaded", firstHide);

function firstHide() {
    document.getElementById("cs1").style.display = "none";
    document.getElementById("cs2").style.display = "none";
    document.getElementById("cs3").style.display = "none";
    document.getElementById("ms1").style.display = "none";
    document.getElementById("ms2").style.display = "none";
    document.getElementById("ms3").style.display = "none";
    document.getElementById("ms4").style.display = "none";
}

function hideBlocks() {
    document.getElementById("cs1").style.display = "none";
    document.getElementById("cs2").style.display = "none";
    document.getElementById("cs3").style.display = "none";
    document.getElementById("cs4").style.display = "none";
    document.getElementById("ms1").style.display = "none";
    document.getElementById("ms2").style.display = "none";
    document.getElementById("ms3").style.display = "none";
    document.getElementById("ms4").style.display = "none";
}
function showBlocks() {
    document.getElementById("cs1").style.display = "block";
    document.getElementById("cs2").style.display = "block";
    document.getElementById("cs3").style.display = "block";
    document.getElementById("cs4").style.display = "block";
    document.getElementById("ms1").style.display = "block";
    document.getElementById("ms2").style.display = "block";
    document.getElementById("ms3").style.display = "block";
    document.getElementById("ms4").style.display = "block";
}

function executeAll() {
    var x = document.getElementById("executeAll");
    if(x.textContent === "Expand All") {
        x.textContent = "Collapse All";
        showBlocks();
    } else {
        x.textContent = "Expand All";
        firstHide();
    }
}
/*Vanilla Lists*/
function cs1() {
    var x = document.getElementById("cs1");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cs2() {
    var x = document.getElementById("cs2");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cs3() {
    var x = document.getElementById("cs3");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cs4() {
    var x = document.getElementById("cs4");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/*Modded Lists*/
function ms1() {
    var x = document.getElementById("ms1");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function ms2() {
    var x = document.getElementById("ms2");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function ms3() {
    var x = document.getElementById("ms3");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function ms4() {
    var x = document.getElementById("ms4");
    hideBlocks();
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}