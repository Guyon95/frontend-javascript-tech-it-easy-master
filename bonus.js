//bonus 1
const btnSortPrice = document.getElementById("btn-sort-price");

btnSortPrice.addEventListener("click", btnSortOnPrice);

const btnAmbilightTVs = document.getElementById("btn-ambilight");

btnAmbilightTVs.addEventListener("click", btngetAllAmbilightTVs);

const btnSold = document.getElementById("btn-sold");

btnSold.addEventListener("click", btnGetSoldItems);

//bonus 2

function btnSortOnPrice() {
  let result = sortOnPrice();
  generateTV(result, "opdracht-bouns-twee");
}

function btngetAllAmbilightTVs() {
  let result = getAllAmbilightTVs();
  generateTV(result, "opdracht-bouns-twee");
}
function btnGetSoldItems() {
  let result = getSoldItems();
  generateTV(result, "opdracht-bouns-twee");
}
