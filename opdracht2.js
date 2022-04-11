// Opdracht 2a
let totalSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold
}
console.log("2A; Total sold ", totalSold);

// Bonus 2a - Weergave in HTML
const el = document.getElementById("2a")
el.innerHTML = "2A: " + totalSold

// Opdracht 2c
let totalBought = 0;
for (let i = 0; i < inventory.length; i++) {
    totalBought += inventory[i].originalStock
}
console.log("2C; Total bought ", totalBought)

// Bonus 2c - Weergave in HTML
const el2 = document.getElementById("2c")
el2.innerHTML = "2C: " + totalBought

// Opdracht 2e
let stock = totalBought - totalSold
console.log("2E; Still in Stock; ", stock)

// Bonus 2e - Weergave in HTML
const el3 = document.getElementById("2e")
el3.innerHTML = "2E: " + stock