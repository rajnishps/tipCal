const billInput = document.querySelector(".billInput");
const tipInput = document.querySelector(".tipInput");
const numPeople = document.querySelector(".numPeople");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");

let persons = Number(numPeople.textContent);

const minusPeople = () => {
  if (numPeople.textContent > 1) {
    numPeople.textContent -= 1;
  }
  calculateBill();
};
const plusPeople = () => {
  persons = Number(numPeople.textContent);
  numPeople.textContent = persons += 1;

  calculateBill();
};

const calculateBill = () => {
  let bill = Number(billInput.value);
  let tip = Number(tipInput.value);
  let tips = (bill / 100) * tip;
  let peo = Number(numPeople.textContent);
  total.textContent = ((bill + tips) / peo).toFixed(2);
};

const resetit = () => {
  numPeople.textContent = 1;
  billInput.value = "";
  tipInput.value = "";
  total.textContent = "0,00";
};
