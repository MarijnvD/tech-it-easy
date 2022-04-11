const tvNames = inventory.map ((tv) =>{
    return tv.type;
})

console.log("1A; Tv types", tvNames);

const soldOut = inventory.filter((tv) =>{
    return tv.originalStock === tv.sold;
})

console.log("1B; Sold out ", soldOut);

const ambiTv = inventory.filter((tv) =>{
    return tv.options.ambiLight === true;
})

console.log("1C; Ambilight " , ambiTv);

function sortTv(array) {

    array.sort((a, b) => {
        return a.price - b.price;
    })
}

sortTv(inventory);

console.log("1D; Sorted Price ", inventory);


//Bonus; Antwoorden weergeven in HTML;
const el4 = document.getElementById("1a")
el4.innerHTML = "1A-1D; Zie console"