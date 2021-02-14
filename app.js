const val = document.getElementById('quantity');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
// dec.setAttribute("disabled", "disabled");
let valueCount = 0;

document.querySelector(".pyramid").addEventListener('click', decrementValue);
document.querySelector(".pyramid").addEventListener('click', incrementValue);

function decrementValue(e) {
  
  if (e.target.id === 'dec' && valueCount > 0) {
    console.log("clicked");
    e.nextSibling.innerHTML = --valueCount;
    // valueCount--;
  }
  
  e.preventDefault();
  console.log(valueCount);
}

function incrementValue(e) {
  
  if (e.target.id === 'inc') {
    console.log("clicked");
    e.previousSibling.innerHTML = ++valueCount
  }
  
  e.preventDefault();
}