var pics = [
    "che.jpg",
    "che2.jpg",
    "che3.jpg",
    "che4.jpg",
    "che5.jpg",
    "che6.jpg",
]
var counter;
var btn;
if(btn = document.querySelector(".right"))
{
var img = document.querySelector("img");
btn.addEventListener("click", function(){
    img.src = pics[counter];
    if(counter === 1)
    {
        counter =counter+1;
    }
    else if(counter === 2)
    {
        counter = 3;
    }
    else if(counter === 3)
    {
        counter = 4;
    }
    else if(counter === 4)
    {
        counter = 5;
    }
    else if(counter === 5)
    {
        counter = 1;
    }
});
}
else if(btn = document.querySelector(".left"))
{
var img = document.querySelector("img");
btn.addEventListener("click", function(){
	img.src = pics[counter];
    if(counter === 1)
    {
        counter = 5;
    }
    else if(counter === 2)
    {
        counter = 1;
    }
    else if(counter === 3)
    {
        counter = 2;
    }
    else if(counter === 4)
    {
        counter = 3;
    }
    else if(counter === 5)
    {
        counter = 4;
    }
});
}