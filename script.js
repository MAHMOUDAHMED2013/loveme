let imageSec1 = document.getElementsByClassName("section1");
let imageSec2 = document.getElementsByClassName("section2");
let imageSec3 = document.getElementsByClassName("image-1");
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

yesBtn.addEventListener("click",() =>{
    imageSec1.style.backgroundColor = 'red';
    imageSec2.style.backgroundColor = 'red';
    imageSec3.style.backgroundColor = 'red';

    noBtn.style = 'right:50px ; bottom:50px'
})
noBtn.addEventListener("click",function(){
    let randomNumber1 = Math.ceil(Math.random()*200);
    let randomNumber2 = Math.ceil(Math.random()*320);
    imageSec1.style = 'background:#fff';
    imageSec2.style = 'background:#fff';
    imageSec3.style = 'background:#fff';
noBtn.style = ` top:${randomNumber1}px;right:${randomNumber2}px `

})
