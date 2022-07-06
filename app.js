// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})


  //Loading


  let spinnerWrapper = document.querySelector('.spinner-wrapper');
  
window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});


  