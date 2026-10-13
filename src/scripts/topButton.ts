//Create all the variables for the needed elements.
let topButton: HTMLButtonElement;

//The initialization function.
function topButtonSetup() {
    //Register the top button.
    topButton = document.getElementById("topButton") as HTMLButtonElement;
    topButton.onclick = () => {
        topFunction();
    };

    //Add a listener to the scolling of the page.
    window.onscroll = function() {
      scrollFunction()
    };
}

//Top function moved the page back up to the top of the page.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//When the page has scrolled show the top button, when the page is at the begining hide the top button
function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

export { topButtonSetup };