var pics= [
	"che1.jpg",
	"che2.jpg",
	"che3.jpg",
	"che4.jpg",
	"che5.jpg",
	"che6.jpg"
	]
var counter = 1;
var btn;
if(btn = document.querySelector(".right"))
{
var img = document.querySelector("img");
btn.addEventListener("click", function(){
	img.src = pics[counter];
    counter = counter+1;
    if(counter === 6)
    {
        counter = 0;
    }
});
}
if(btn = document.querySelector(".left"))
{
var img = document.querySelector("img");
btn.addEventListener("click", function(){
	img.src = pics[counter];
    counter = counter -1;
    if(counter === -1)
    {
        counter = 5;
    }
});
}