//1a
console.log("1a");
getAll();

//1b
console.log("1b");
getSoldItems();

//1c
console.log("1c");
getAllAmbilightTVs();

//1d
console.log("1d");
sortOnPrice();

function getAll() {
  console.log("Alle Tv's");
  let result = inventory.map((item) => item);
  console.log(result);
  return result;
}

function getSoldItems() {
  console.log("Alle uitverkochte examplaren");
  let result = inventory.filter((item) => item.originalStock - item.sold === 0);

  console.log(result);

  return result;
}

function getAllAmbilightTVs() {
  console.log("Alle Tv's met ambilight");
  let result = inventory.filter((item) => item.options.ambiLight === true);

  console.log(result);

  return result;
}

function sortOnPrice() {
  console.log("Alle Tv's gesorteerd op price");
  let result = inventory.sort((a, b) => a.price - b.price);

  console.log(result);

  return result;
}
