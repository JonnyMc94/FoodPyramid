let personChosen;
let RDA = {
  adult: [1, 2, 2, 3, 6, 8],
  child: [0, 1, 2, 3, 5, 7]
};

const chooseAdult =  () => {
  personChosen = "adult";
}
const child =  () => {
  personChosen = "child";
}

const enteredDate = document.getElementById("dateVal");
const date = document.querySelector('.validity');
const submit = document.getElementById('submit').addEventListener('click', (e) => {
  
  e.preventDefault();
  let string = enteredDate.value;
  let re = /^(\d{2})\/(\d{2})\/(\d{4})$/
  if (string.match(re)) {
    date.innerHTML = "The date is: " + string;
  } else {
    alert("please enter a valid date in the format specified");
  }
  
});

const decrementValue = (btn, lvl) => {
  let personArray = RDA[personChosen];
  let arrayIndex = personArray[lvl - 1];
  const quantity = btn.nextElementSibling;
  const row = btn.parentElement;
  
  let val = quantity.innerHTML;
  if (val > 0) {
    quantity.innerHTML = parseInt(val) - 1;
 
  }
  if (val -1 == 0) {
    btn.style.background = "white";
  }

  if ((val - 1) <= arrayIndex) {
    quantity.style.background = "white";
  }

  
}

const incrementValue = (btn, lvl) => {
  let personArray = RDA[personChosen];
  let arrayIndex = personArray[lvl - 1];
  const quantity = btn.previousElementSibling;
  let val = quantity.innerHTML;
  const dec = btn.previousElementSibling.previousElementSibling;
  dec.style.background = "#FF4136";
  quantity.innerHTML = parseInt(val) +1;

  if ( val > (parseInt(arrayIndex))-1) {
    console.log(parseInt(arrayIndex));
    quantity.style.background = "#FF4136";
  }
  
}

const displayBtns = (lvl) => {
  const btns = document.getElementById(`trap${lvl}`).children;
  btns[0].classList.remove('hide');
  btns[2].classList.remove('hide');
}

const hideBtns = (lvl) => {
  const btns = document.getElementById(`trap${lvl}`).children;
  btns[0].classList.add('hide');
  btns[2].classList.add('hide');
}

const changeColorAd = () => {
  document.querySelector(".adults").style.background = "#FF4136";
  document.querySelector(".children").style.background = "white";
}

const changeColorCh = () => {
  document.querySelector(".adults").style.background = "white";
  document.querySelector(".children").style.background = "#FF4136";
}
