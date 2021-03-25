/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
var buttons = document.querySelectorAll('input[type="button"]');
[].forEach.call(buttons, function(btn){
	btn.addEventListener('click', function(e){
  	e.target.closest('.green-list-prop').className += ' wrooom'
  })
})
*/

var btnOpen = document.getElementById('buttonClick');
var object = document.getElementById('blockClick');

btnOpen.addEventListener('click',function(){
    object.style.right="100%";
})


let a = document.getElementById('a');
let b = document.getElementById('b');
let sumM1 = document.getElementById('sum1');
let sumM2 = document.getElementById('sum2');
let sumM3 = document.getElementById('sum3');

let numberChecker = () => {
  let regex = /^[-+]?\d+(\.\d+)?$/;

  if (regex.test(a.value) && regex.test(b.value))
      sumM1.innerText = (+a.value+(+a.value/100*+b.value)).toString();
      let s1 = (+a.value+(+a.value/100*+b.value));
      sumM2.innerText = (+s1+(+s1/100*+b.value)).toString();
      let s2=(+s1+(+s1/100*+b.value));
      sumM3.innerText = (+s2+(+s2/100*+b.value)).toString();
 /* else {
      // Исправление глюка необновляемого содержимого DIV
      while (sumM1.firstChild) {
          sumM1.removeChild(sumM1.firstChild);
      }
      sumM1.innerText= "Нет данных"
  }
*/
}

a.addEventListener("input", numberChecker);
b.addEventListener("input", numberChecker);