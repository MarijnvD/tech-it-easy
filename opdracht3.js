// Opdracht 3a;
const tvBrands = inventory.map(tv => tv.brand)

console.log("3a: ", tvBrands)

// Bonus 2e - Weergave in HTML
const el5 = document.getElementById("3a")
el5.innerHTML = "3a: " +   tvBrands

// Opdracht 3b;
function searchBrands (array) {
    return array.map(tv => tv.brand)
}

console.log("3b: ", searchBrands(inventory))


// Bonus 2e - Weergave in HTML
const el6 = document.getElementById("3b")
el6.innerHTML = "3b: " +  searchBrands(inventory)