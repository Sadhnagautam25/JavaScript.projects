
let allBtn = document.querySelectorAll('.btn');
const inputDisplay = document.querySelector('#input-display');


allBtn[0].addEventListener('click', ()=>{
  inputDisplay.value = '';
});

allBtn[1].addEventListener('click', ()=>{
  inputDisplay.value += '1';
});

allBtn[2].addEventListener('click', ()=>{
  inputDisplay.value += '2';
});

allBtn[3].addEventListener('click', ()=>{
  inputDisplay.value += '+';
});

allBtn[4].addEventListener('click', ()=>{
  inputDisplay.value += '3';
});

allBtn[5].addEventListener('click', ()=>{
  inputDisplay.value += '4';
});

allBtn[6].addEventListener('click', ()=>{
  inputDisplay.value += '-';
});

allBtn[7].addEventListener('click', ()=>{
  inputDisplay.value += '5';
});

allBtn[8].addEventListener('click', ()=>{
  inputDisplay.value += '6';
});

allBtn[9].addEventListener('click', ()=>{
  inputDisplay.value += '*';
});

allBtn[10].addEventListener('click', ()=>{
  inputDisplay.value += '7';
});

allBtn[11].addEventListener('click', ()=>{
  inputDisplay.value += '8';
});

allBtn[12].addEventListener('click', ()=>{
  inputDisplay.value += '/';
});

allBtn[13].addEventListener('click', ()=>{
  inputDisplay.value = eval(inputDisplay.value);
});

allBtn[14].addEventListener('click', ()=>{
  inputDisplay.value += '9';
});

allBtn[15].addEventListener('click', ()=>{
  inputDisplay.value += '0';
});

allBtn[16].addEventListener('click', ()=>{
  inputDisplay.value += '.';
});