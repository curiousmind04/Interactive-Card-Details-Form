const nameInput = document.querySelector("#name");
const cardName = document.querySelector(".card-front-name");
const numberInput = document.getElementById("card-number");
const cardNumber = document.getElementById("card-front-number");
const monthInput = document.querySelector("#exp-date-mth");
const cardMonth = document.querySelector(".card-front-mth");
const yearInput = document.querySelector("#exp-date-yr");
const cardYear = document.querySelector(".card-front-yr");
const cvcInput = document.querySelector("#cvc");
const cardCvc = document.querySelector(".card-back-span");
const formButton = document.querySelector(".button");
const nameError = document.querySelector(".name-error");
const numError = document.querySelector(".num-error");
const expMthError = document.querySelector(".exp-mth-error");
const expYrError = document.querySelector(".exp-yr-error");
const cvcError = document.querySelector(".cvc-error");
const form = document.querySelector(".form");
const complete = document.querySelector(".complete");
const completeButton = document.querySelector(".complete-button");

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

nameInput.addEventListener("keyup", () => {
  cardName.innerHTML = nameInput.value;
  nameInput.classList.remove("error");
  nameError.style.display = "none";
});

numberInput.addEventListener("keyup", () => {
  cardNumber.innerHTML = format(numberInput.value);
  numberInput.classList.remove("error");
  numError.style.display = "none";
});

monthInput.addEventListener("keyup", () => {
  cardMonth.innerHTML = monthInput.value;
  monthInput.classList.remove("error");
  expMthError.style.display = "none";
});

yearInput.addEventListener("keyup", () => {
  cardYear.innerHTML = yearInput.value;
  yearInput.classList.remove("error");
  expYrError.style.display = "none";
});

cvcInput.addEventListener("keyup", () => {
  cardCvc.innerHTML = cvcInput.value;
  cvcInput.classList.remove("error");
  cvcError.style.display = "none";
});

formButton.addEventListener("click", (e) => {
  let x = 0;
  e.preventDefault();
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.style.display = "block";
  } else {
    x++;
  }
  if (numberInput.value === "") {
    numberInput.classList.add("error");
    numError.innerHTML = "Can't be blank";
    numError.style.display = "block";
  } else {
    x++;
  }
  if (numberInput.value.length > 0 && numberInput.value.length < 16) {
    numberInput.classList.add("error");
    numError.innerHTML = "Must be 16 numbers";
    numError.style.display = "block";
  } else {
    x++;
  }
  if (
    (monthInput.value.length > 0 && monthInput.value.length < 2) ||
    monthInput.value > 12 ||
    monthInput.value < 1
  ) {
    monthInput.classList.add("error");
    expMthError.innerHTML = "e.g. 01 - 12";
    expMthError.style.display = "block";
  } else {
    x++;
  }
  if (monthInput.value === "") {
    monthInput.classList.add("error");
    expMthError.innerHTML = "Can't be blank";
    expMthError.style.display = "block";
  } else {
    x++;
  }
  if (
    (yearInput.value.length > 0 && yearInput.value.length < 2) ||
    yearInput.value < 23
  ) {
    yearInput.classList.add("error");
    expYrError.innerHTML = "e.g. 23+";
    expYrError.style.display = "block";
  } else {
    x++;
  }
  if (yearInput.value === "") {
    yearInput.classList.add("error");
    expYrError.innerHTML = "Can't be blank";
    expYrError.style.display = "block";
  } else {
    x++;
  }
  if (cvcInput.value === "") {
    cvcInput.classList.add("error");
    cvcError.innerHTML = "Can't be blank";
    cvcError.style.display = "block";
  } else {
    x++;
  }
  if (
    (cvcInput.value.length > 0 && cvcInput.value.length < 3) ||
    cvcInput.value < 0
  ) {
    cvcInput.classList.add("error");
    cvcError.innerHTML = "Must be 3 numbers";
    cvcError.style.display = "block";
  } else {
    x++;
  }
  if (x === 9) {
    form.style.display = "none";
    complete.style.display = "block";
  }
});

completeButton.addEventListener("click", () => {
  form.style.display = "block";
  complete.style.display = "none";
  cardName.innerHTML = "JANE APPLESEED";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardMonth.innerHTML = "00";
  cardYear.innerHTML = "00";
  cardCvc.innerHTML = "000";
  form.reset();
});
