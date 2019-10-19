// get all links and put them in an array(list)
var links = document.querySelectorAll('.side-link');
// console.log(links)

// add click envent to all links
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click',(e) => 
    toggleArrayClass(element=e.target, arr=links, addClass="selected"))
}

// the function to toggle the class for selected element
function toggleArrayClass(element, arr, addClass){
    arr.forEach(link => {
        link.classList.remove(addClass);
    })
    element.classList.add(addClass);
}