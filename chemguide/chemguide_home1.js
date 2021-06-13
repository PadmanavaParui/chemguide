var pics = [
    "che.jpg",
    "che2.jpg",
    "che3.jpg",
    "che4.jpg",
    "che5.jpg",
    "che6.jpg"
]
var btn = document.querySelector(".left");
var img = document.querySelector("img");
var counter= 1;
btn.addEventListener("click",function(){
    img.src = pics[counter];
    counter = counter - 1;
    if(counter === -1)
    {
        counter = 5;
    }
});
		