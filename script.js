const countValue = document.getElementById("counter");

function update(action) {
  // get the vlue from UI
  let value = parseInt(countValue.textContent);
  //Update the value
  if (action) value = value + 1;
  else {
    value = value - 1;
  }
  //set the value onto UI
  countValue.innerText = value;
}
