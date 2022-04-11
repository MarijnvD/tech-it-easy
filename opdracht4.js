// Opdracht 4a;
function generateName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`
}

console.log("4a: ",generateName(inventory[0]))

// Opdracht 4b;
function formatPrice(tvPrice) {
    return `€${tvPrice},-`
}


console.log("4b: ", formatPrice((inventory[0].price)))

// Opdracht 4c

function formatScreenSizes(screenSizes) {
    return screenSizes
        .map(size => `${size} inches (${Math.round(size * 2.54)})cm`)
        .join(" | ")
}

console.log("4c: ", formatScreenSizes(inventory[5].availableSizes))

// Opdracht 4d
function formatTv(tv) {
    return generateName(tv)+
        formatPrice(tv.price) +
        formatScreenSizes(tv.availableSizes)
}

console.log("4d: ", formatTv(inventory[5]))

// Opdracht 4e
function formatTvs(array) {
    return array.map(formatTv)
}

console.log("4e: ", formatTvs(inventory))

// // wait for the page to load
// function makeList(array) {
//
//     // Make a container element for the list - which is a <div>
//     // You don't actually need this container to make it work
//     let listContainer = document.getElementById("vessel");
//
//
//
//     for (let i = 0; i < array.length; ++i) {
//
//         // create a <li> for each one.
//         let listItem = document.createElement("div");
//
//         // add the images and the html you want before and after
//         listItem.innerHTML = array[i] ;
//
//         // add listItem to the listElement
//         listContainer.appendChild(listItem);
//
//     }
//
// }
// const test = formatTvs(inventory)
// console.log(test.map(makeList))

function empty(){
    document.getElementById("model-info").innerHTML = "";
}


function checkTV(array, index) {
    const array2 = [...array]
    const tvInfo = document.getElementById("model-info")
    let x = document.createElement("div")
    tvInfo.appendChild(x)
    x.innerHTML =
        `
    <h3>${array2[index].brand} ${array2[index].type}  ${array2[index].name}</h3> 
    <p>${formatPrice(array2[index].price)}</p>
    <p>${sizer(array2[index].availableSizes)}</>
    `
}

function sizer(arraySizes) {
    const grotes = [...arraySizes]
    for (let i = 0; i < grotes.length; i++) {
        grotes[i] = grotes[i] + "inch (" + (grotes[i] * 2.54) + " cm)"
    }
    return grotes.join(" | ")
}

function allTVS(array) {
    for (let i = 0; i < array.length; i++) {
        checkTV(array, [i])
    }
}
allTVS(inventory)


//Buttons

function priceAZ(array) {
    const priceAZ = [...array]
    priceAZ.sort((a, b) => a.price - b.price)

    return priceAZ
}
function priceZA(array) {
    const priceZA = [...array]
    priceZA.sort((b, a) => a.price - b.price)

    return priceZA
}
function sortAZ(array) {
    const sortAZ = [...array]
    sortAZ.sort((b,a) => (a.brand < b.brand) ? 1 : ((a.brand > b.brand) ? -1 : 0))

    return sortAZ
}
function sortZA(array) {
    const sortZA = [...array]
    sortZA.sort((a,b) => (a.brand < b.brand) ? 1 : ((a.brand > b.brand) ? -1 : 0))

    return sortZA
}

function ambiLight(checkbox) {
    if (checkbox.checked === true) {
        const inventory3 = inventory.filter((tv) => {
            if (tv.options.ambiLight === true) {
                return true;
            }
        })
        console.log(inventory3)
        empty()
        allTVS(inventory3)
    } else {
        empty()
        const inventory2 = [...inventory]
        allTVS(inventory2)
    }
}
function smartTv(checkbox) {
    if (checkbox.checked === true) {
        const inventory3 = inventory.filter((tv) => {
            if (tv.smartTv === true) {
                return true;
            }
        })
        console.log(inventory3)
        empty()
        allTVS(inventory3)
    } else {
        empty()
        const inventory2 = [...inventory]
        allTVS(inventory2)
    }
}
