// take array of elements and selected element,
// adding class to that element and
// removing that class from the rest of elements

function toggleArrayClass(arr, element, addClass){
    arr.forEach(link => {
        link.classList.remove(addClass);
    })
    element.classList.add(addClass);
}

export default toggleArrayClass;