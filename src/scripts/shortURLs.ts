//Create all of the variables for the needed elements.
let idButton: HTMLButtonElement;
let idAnchorCopy: HTMLHeadingElement;
let slugButton: HTMLButtonElement;
let slugAnchorCopy: HTMLHeadingElement;

//The initialization function.
function shortURLsSetup() {
  //Register the ID Button function.
  idAnchorCopy = document.getElementById("idAnchorCopy") as HTMLHeadingElement;
  idButton = document.getElementById("idButton") as HTMLButtonElement;
  idButton.onclick = () => {
    copyText(idAnchorCopy.innerHTML);
  }

  //Register the Slug Button function.
  slugAnchorCopy = document.getElementById("slugAnchorCopy") as HTMLHeadingElement;
  slugButton = document.getElementById("slugButton") as HTMLButtonElement;
  slugButton.onclick = () => {
    copyText(slugAnchorCopy.innerHTML);
  }
}

async function copyText(type:string) {
  try {
    let hold = location.origin + "/u/#" + type;
    await navigator.clipboard.writeText(hold);
    //console.log('Content copied to clipboard: ', hold);
  } catch(error) {
    console.error('Failed to copy: ', error);
  }
}

export { shortURLsSetup }
