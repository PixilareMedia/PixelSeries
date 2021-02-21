document.addEventListener("DOMContentLoaded", anchorCheck);

function anchorCheck() {
    var curl = document.URL;
    var anchor = curl.slice(46);
    var anchor2 = curl.slice(30);
    
    if(anchor === "#CraftSeason1" || anchor2 === "#CraftSeason1")
    {
        cs1();
    }
    if(anchor === "#CraftSeason2" || anchor2 === "#CraftSeason2")
    {
        cs2();
    }
    if(anchor === "#CraftSeason3" || anchor2 === "#CraftSeason3")
    {
        cs3();
    }
    if(anchor === "#CraftSeason4" || anchor2 === "#CraftSeason4")
    {
        cs4();
    }
    if(anchor === "#ModdedSeason1" || anchor2 === "#ModdedSeason1")
    {
        ms1();
    }
    if(anchor === "#ModdedSeason2" || anchor2 === "#ModdedSeason2")
    {
        ms2();
    }
    if(anchor === "#ModdedSeason3" || anchor2 === "#ModdedSeason3")
    {
        ms3();
    }
    if(anchor === "#ModdedSeason4" || anchor2 === "#ModdedSeason4")
    {
        ms4();
    }
}