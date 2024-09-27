let  add = document.getElementById('plus');
let  sub = document.getElementById('minus');

let i = 0;

add.addEventListener('click', function(){
    i++
    document.getElementById('display').innerHTML = i
} );


sub.addEventListener('click', function(){
    i-- 
    document.getElementById('display').innerHTML = i
} );