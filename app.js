let  changer = document.querySelector(".colorchange")

const colors = ['red', 'blue', 'green', 'brown', 'purple']

const randomcolor = colors[Math.floor(Math.random() * colors.length )];
console.log(randomcolor);

changer.addEventListener('click', function(){
    
    document.body.style.backgroundColor = randomcolor;

});