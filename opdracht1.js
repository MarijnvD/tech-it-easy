const tvNames = inventory.map ((tv) =>{
    return tv.type;
})

console.log("1A ", tvNames);

const soldOut = inventory.filter((tv) =>{
    return tv.originalStock === tv.sold;
})

console.log("1B ", soldOut);

const ambiTv = inventory.filter((tv) =>{
    return tv.options.ambiLight === true;
})

console.log("1C" , ambiTv);

inventory.sort((a, b) => {
    return a.price - b.price;
})

console.log("1D ", inventory);