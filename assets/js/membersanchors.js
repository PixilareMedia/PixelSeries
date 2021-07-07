function anchorCheck() {
    //Variables
    var url = document.URL;
    var curl1 = url.slice(46);
    var curl2 = url.slice(30);
    var curl3 = url.slice(28);
    var series1 = curl1.slice(0, 13);
    var series2 = curl2.slice(0, 13);
    var series3 = curl3.slice(0, 13);
    var series4 = curl1.slice(0, 14);
    var series5 = curl2.slice(0, 14);
    var series6 = curl3.slice(0, 14);
    var anchor1 = curl1.slice(13);
    var anchor2 = curl2.slice(13);
    var anchor3 = curl3.slice(13);
    var anchor4 = curl1.slice(14);
    var anchor5 = curl2.slice(14);
    var anchor6 = curl3.slice(14);
    //Pixel Craft Anchor Checks
    if(series1 === "#Pixel-Craft-" || series2 === "#Pixel-Craft-" || series3 === "#Pixel-Craft-") {
        if(anchor1 === "Season-1" || anchor2 === "Season-1" || anchor3 === "Season-1") {
            openClose(PCs1);
        }
        if(anchor1 === "Season-2" || anchor2 === "Season-2" || anchor3 === "Season-2") {
            openClose(PCs2);
        }
        if(anchor1 === "Season-3" || anchor2 === "Season-3" || anchor3 === "Season-3") {
            openClose(PCs3);
        }
        if(anchor1 === "Season-4" || anchor2 === "Season-4" || anchor3 === "Season-4") {
            openClose(PCs4);
        }
        if(anchor1 === "Season-5" || anchor2 === "Season-5" || anchor3 === "Season-5") {
            openClose(PCs5);
        }
    }
    //Pixel Modded Anchor Checks
    if(series4 === "#Pixel-Modded-" || series5 === "#Pixel-Modded-" || series6 === "#Pixel-Modded-") {
        if(anchor4 === "Season-1" || anchor5 === "Season-1" || anchor6 === "Season-1") {
            openClose(PMs1);
        }
        if(anchor4 === "Season-2" || anchor5 === "Season-2" || anchor6 === "Season-2") {
            openClose(PMs2);
        }
        if(anchor4 === "Season-3" || anchor5 === "Season-3" || anchor6 === "Season-3") {
            openClose(PMs3);
        }
        if(anchor4 === "Season-4" || anchor5 === "Season-4" || anchor6 === "Season-4") {
            openClose(PMs4);
        }
    }
    //All Members Anchor Check
    if(curl1 === "#All" || curl2 === "#All" || curl3 === "#All")
    {
        openClose(ALL);
    }
}