//3a
let brands = inventory.map((item) => item.brand);

let filterBrands = brands.filter(
  (filterItem, index) => brands.indexOf(filterItem) === index
);

const opdrachtDrieA = document.getElementById("opdracht-drie-a");
opdrachtDrieA.textContent = filterBrands;

//3b
let resultB = getBrandsNames(inventory);

const opdrachtDrieB = document.getElementById("opdracht-drie-b");
opdrachtDrieB.textContent = resultB;

function getBrandsNames(televisions) {
  let brands = televisions.map((television) => television.brand);

  let filterBrands = brands.filter(
    (filterItem, index) => brands.indexOf(filterItem) === index
  );

  return filterBrands;
}
