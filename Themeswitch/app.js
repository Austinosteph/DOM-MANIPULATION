let  light = document.getElementById('light');
let  dark = document.getElementById('dark');


light.addEventListener('click', function(){
    document.querySelector("body").style.backgroundColor = "white";
} );


dark.addEventListener('click', function(){
    document.querySelector("body").style.backgroundColor = "black";
} );