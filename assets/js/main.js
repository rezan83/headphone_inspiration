// importing the function from the module
import toggleArrayClass from './ToggleArrayClass.js'
// get all links and put them in an array(list)
var links = document.querySelectorAll('.side-link');

// add click envent to all links
links.forEach(link => {
    link.addEventListener('click',(e) => 
    toggleArrayClass(links, e.target, "selected"))
})