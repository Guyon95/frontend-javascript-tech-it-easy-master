//4a
console.log("4a");
console.log(getTvName(inventory[1]));
console.log(getTvName(inventory[3]));

function getTvName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
}

//4b
console.log("4b");

console.log(getTvPrice(inventory[1].price));

function getTvPrice(price) {
  return `\u20AC${price},-`;
}

//4c
console.log("4c");
console.log(getAvailableSizes(inventory[1].availableSizes));
console.log(getAvailableSizes(inventory[3].availableSizes));

function getAvailableSizes(sizes) {
  let a = sizes.map((size) => {
    let cm = inchesToCentimeters(size);

    return `[${size}] inch (${cm} cm)`;
  });

  return a.join("|");
}

function inchesToCentimeters(inch) {
  return Math.round(inch * 2.54);
}

//4d
display(inventory[3]);

function display(television) {
  document.getElementById("tv-name").textContent = getTvName(television);
  document.getElementById("tv-price").textContent = getTvPrice(
    television.price
  );
  document.getElementById("tv-sizes").textContent = getAvailableSizes(
    television.availableSizes
  );
}

//4e
generateTV(inventory, "opdracht-vier-e");

function generateTV(televisions, elementName) {
  const tvs = [];

  for (let i = 0; i < televisions.length; i++) {
    tvs.push(getTvDetails(televisions[i]));
  }

  document.getElementById(elementName).innerHTML = `${tvs
    .map(
      (item) =>
        `<div>${item.name}<br> ${item.price}<br> ${item.sizes}<br></div><br>`
    )
    .join("")}`;
}

function getTvDetails(television) {
  return {
    name: getTvName(television),
    price: getTvPrice(television.price),
    sizes: getAvailableSizes(television.availableSizes),
  };
}
