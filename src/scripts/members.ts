//Create all of the variables for the needed elements.
let PixelSeriesAll: HTMLDivElement;
let PixelCraftSeason1: HTMLDivElement;
let PixelCraftSeason2: HTMLDivElement;
let PixelCraftSeason3: HTMLDivElement;
let PixelCraftSeason4: HTMLDivElement;
let PixelCraftSeason5: HTMLDivElement;
let PixelCraftSeason6: HTMLDivElement;
let PixelModdedSeason1: HTMLDivElement;
let PixelModdedSeason2: HTMLDivElement;
let PixelModdedSeason3: HTMLDivElement;
let PixelModdedSeason4: HTMLDivElement;
let PixelCraftSeason1Button: HTMLButtonElement;
let PixelCraftSeason2Button: HTMLButtonElement;
let PixelCraftSeason3Button: HTMLButtonElement;
let PixelCraftSeason4Button: HTMLButtonElement;
let PixelCraftSeason5Button: HTMLButtonElement;
let PixelCraftSeason6Button: HTMLButtonElement;
let PixelModdedSeason1Button: HTMLButtonElement;
let PixelModdedSeason2Button: HTMLButtonElement;
let PixelModdedSeason3Button: HTMLButtonElement;
let PixelModdedSeason4Button: HTMLButtonElement;

//The initialization function.
function membersSetup() {
  //Get all of the Panels of each grouping of members.
  PixelSeriesAll = document.getElementById("PixelSeriesAllMembers") as HTMLDivElement;
  PixelCraftSeason1 = document.getElementById("PixelCraftSeason1Members") as HTMLDivElement;
  PixelCraftSeason2 = document.getElementById("PixelCraftSeason2Members") as HTMLDivElement;
  PixelCraftSeason3 = document.getElementById("PixelCraftSeason3Members") as HTMLDivElement;
  PixelCraftSeason4 = document.getElementById("PixelCraftSeason4Members") as HTMLDivElement;
  PixelCraftSeason5 = document.getElementById("PixelCraftSeason5Members") as HTMLDivElement;
  PixelCraftSeason6 = document.getElementById("PixelCraftSeason6Members") as HTMLDivElement;
  PixelModdedSeason1 = document.getElementById("PixelModdedSeason1Members") as HTMLDivElement;
  PixelModdedSeason2 = document.getElementById("PixelModdedSeason2Members") as HTMLDivElement;
  PixelModdedSeason3 = document.getElementById("PixelModdedSeason3Members") as HTMLDivElement;
  PixelModdedSeason4 = document.getElementById("PixelModdedSeason4Members") as HTMLDivElement;

  //Get all of the Buttons for each grouping of members.
  PixelCraftSeason1Button = document.getElementById("PixelCraftSeason1Button") as HTMLButtonElement;
  PixelCraftSeason1Button.onclick = () => {
    openClose(PixelCraftSeason1);
  }
  PixelCraftSeason2Button = document.getElementById("PixelCraftSeason2Button") as HTMLButtonElement;
  PixelCraftSeason2Button.onclick = () => {
    openClose(PixelCraftSeason2);
  }
  PixelCraftSeason3Button = document.getElementById("PixelCraftSeason3Button") as HTMLButtonElement;
  PixelCraftSeason3Button.onclick = () => {
    openClose(PixelCraftSeason3);
  }
  PixelCraftSeason4Button = document.getElementById("PixelCraftSeason4Button") as HTMLButtonElement;
  PixelCraftSeason4Button.onclick = () => {
    openClose(PixelCraftSeason4);
  }
  PixelCraftSeason5Button = document.getElementById("PixelCraftSeason5Button") as HTMLButtonElement;
  PixelCraftSeason5Button.onclick = () => {
    openClose(PixelCraftSeason5);
  }
  PixelCraftSeason6Button = document.getElementById("PixelCraftSeason6Button") as HTMLButtonElement;
  PixelCraftSeason6Button.onclick = () => {
    openClose(PixelCraftSeason6);
  }
  PixelModdedSeason1Button = document.getElementById("PixelModdedSeason1Button") as HTMLButtonElement;
  PixelModdedSeason1Button.onclick = () => {
    openClose(PixelModdedSeason1);
  }
  PixelModdedSeason2Button = document.getElementById("PixelModdedSeason2Button") as HTMLButtonElement;
  PixelModdedSeason2Button.onclick = () => {
    openClose(PixelModdedSeason2);
  }
  PixelModdedSeason3Button = document.getElementById("PixelModdedSeason3Button") as HTMLButtonElement;
  PixelModdedSeason3Button.onclick = () => {
    openClose(PixelModdedSeason3);
  }
  PixelModdedSeason4Button = document.getElementById("PixelModdedSeason4Button") as HTMLButtonElement;
  PixelModdedSeason4Button.onclick = () => {
    openClose(PixelModdedSeason4);
  }

  startUp();
}

function startUp() {
  hideBlocks();
  PixelCraftSeason6.style.display = "block";
  anchorCheck();
  console.log("There are " + PixelSeriesAll.getElementsByClassName("card-info").length + " members total.");
}

function hideBlocks() {
  PixelSeriesAll.style.display = "none";
  PixelCraftSeason1.style.display = "none";
  PixelCraftSeason2.style.display = "none";
  PixelCraftSeason3.style.display = "none";
  PixelCraftSeason4.style.display = "none";
  PixelCraftSeason5.style.display = "none";
  PixelCraftSeason6.style.display = "none";
  PixelModdedSeason1.style.display = "none";
  PixelModdedSeason2.style.display = "none";
  PixelModdedSeason3.style.display = "none";
  PixelModdedSeason4.style.display = "none";;
}

function openClose(panel: HTMLDivElement) {
  hideBlocks();
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
}

function anchorCheck() {
  let lhash = location.hash.toLocaleLowerCase();
  let hash = lhash.replace("#", "");

  if(!hash) {
    openClose(PixelCraftSeason6);
  } else {
    switch(hash) {
      case "pixel-craft-season-1":
        openClose(PixelCraftSeason1);
        break;
      case "pixel-craft-season-2":
        openClose(PixelCraftSeason2);
        break;
      case "pixel-craft-season-3":
        openClose(PixelCraftSeason3);
        break;
      case "pixel-craft-season-4":
        openClose(PixelCraftSeason4);
        break;
      case "pixel-craft-season-5":
        openClose(PixelCraftSeason5);
        break;
      case "pixel-craft-season-6":
        openClose(PixelCraftSeason6);
        break;
      case "pixel-modded-season-1":
        openClose(PixelModdedSeason1);
        break;
      case "pixel-modded-season-2":
        openClose(PixelModdedSeason2);
        break;
      case "pixel-modded-season-3":
        openClose(PixelModdedSeason3);
        break;
      case "pixel-modded-season-4":
        openClose(PixelModdedSeason4);
        break;
      case "all":
        openClose(PixelSeriesAll);
        break;
      default:
        openClose(PixelCraftSeason6);
    }
  }
}

export { membersSetup }
