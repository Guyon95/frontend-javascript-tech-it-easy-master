//2a

console.log("2a");

let totalSold = 0;

inventory.map((item) => (totalSold += item.sold));

console.log(`Aantal verkocht: ${totalSold}`);

//2b
const opdrachtTweeB = document.getElementById("opdracht-twee-b");
opdrachtTweeB.textContent = totalSold;

//2c
console.log("2c");

let totalPurchased = 0;
inventory.map((item) => (totalPurchased += item.originalStock));

console.log(`Aantal ingekocht: ${totalPurchased}`);

//2d
const opdrachtTweeD = document.getElementById("opdracht-twee-d");
opdrachtTweeD.textContent = totalPurchased;

//2e
const opdrachtTweeE = document.getElementById("opdracht-twee-e");
opdrachtTweeE.textContent = totalPurchased - totalSold;
