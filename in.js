$(function () {

  $('.setting-button').on('click', function () {
    console.log('asd');
    $('.bg-green').toggleClass('bg-green--active')
  });

});


let a = document.getElementById('a');
let b = document.getElementById('b');
let sumM1 = document.getElementById('sum1');
let sumM2 = document.getElementById('sum2');
let sumM3 = document.getElementById('sum3');

let inputa = document.getElementById('a');
inputa.onkeydown = function (e) {
  let aval = document.getElementById("a");
  if (e.keyCode == 8 || e.keyCode == 46) {
    aval.value = aval.value.substring(0, aval.value.length - 1);
  }

  return !(
    /[^0-9.]$/.test(e.key)
  );
}

let inputb = document.getElementById('b');
inputb.onkeydown = function (e) {
  let aval = document.getElementById("b");
  if (e.keyCode == 8 || e.keyCode == 46) {
    aval.value = aval.value.substring(0, aval.value.length - 1);
  }

  return !(/[^0-9.]$/.test(e.key));
}

document.getElementById('a').value = "";
document.getElementById('b').value = "";

let numberChecker = () => {
  let regex = /^[-+]?\d+(\.\d+)?$/;

  if (regex.test(a.value) && regex.test(b.value))
    sumM1.innerText = (+a.value + (+a.value / 100 * +b.value)).toString();
  let s1 = (+a.value + (+a.value / 100 * +b.value));
  sumM2.innerText = (+s1 + (+s1 / 100 * +b.value)).toString();
  let s2 = (+s1 + (+s1 / 100 * +b.value));
  sumM3.innerText = (+s2 + (+s2 / 100 * +b.value)).toString();
}

a.addEventListener("input", numberChecker);
b.addEventListener("input", numberChecker);