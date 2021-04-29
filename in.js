$(function () {
  $('.setting-button').on('click', function () {
    $('.bg-green').toggleClass('bg-green--active')
  });
});

const a = document.getElementById('a');
const b = document.getElementById('b');

const inputA = document.getElementById('a');
inputA.onkeydown = function (e) {
  return (e.key >= '0' && e.key <= '9') || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete' || e.key == 'Backspace';
}

const inputB = document.getElementById('b');
inputB.onkeydown = function (e) {
  return (e.key >= '0' && e.key <= '9') || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete' || e.key == 'Backspace';
}

document.getElementById('a').value = "";
document.getElementById('b').value = "";

function numberChecker() {
  let val = a.value;

  for (var i = 0; i < 3; i++) {
    $('td[name=sum]')[i].innerText = (+val + (+val / 100 * +b.value)).toString();
    val = (+val + (+val / 100 * +b.value));
  }
}

a.addEventListener("input", numberChecker);
b.addEventListener("input", numberChecker);