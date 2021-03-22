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