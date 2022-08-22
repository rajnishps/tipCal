const billInput = document.querySelector(".billInput");
const tipInput = document.querySelector(".tipInput");
const noPeople = document.querySelector(".noPeople");
const total = document.querySelector(".total");
const minus = document.querySelector(".noPeople");
const reset = document.querySelector(".reset");

let peopleo = Number(minus.textContent);
console.log(peopleo);
const minusPeople = () => {
  if (minus.textContent > 1) {
    document.querySelector(".noPeople").textContent -= 1;
  }
  calculateBill();
};
const plusPeople = () => {
  peopleo = Number(minus.textContent);
  peopleo += 1;
  document.querySelector(".noPeople").textContent = peopleo;

  calculateBill();
};

const calculateBill = () => {
  let bill = Number(billInput.value);
  let tip = Number(tipInput.value);
  let tips = (bill / 100) * tip;
  let peo = Number(noPeople.textContent);
  total.textContent = Math.ceil((bill + tips) / peo);
};

const resetit = () => {
  minus.textContent = 1;
  billInput.value = "";
  tipInput.value = "";
  total.textContent = '0';
};
