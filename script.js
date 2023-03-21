const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// functionality for single product images
const mainImage = document.querySelector("#MainImg") // same as getElementById
const smallImage = document.querySelectorAll(".smallImg") // same as getElementsByClassName

smallImage.forEach(  img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src
        })
})

// cart page
const removeItem = document.getElementsByClassName("far fa-times-circle")
console.log(removeItem)

for(i = 0; i < removeItem.length; i++)
{
    const button = removeItem[i]
    button.addEventListener('click', function(event) {
        const btnClicked = event.target
        btnClicked.parentElement.parentElement.parentElement.remove()
        event.preventDefault() //remove this later it stops refreshing 
    })
}