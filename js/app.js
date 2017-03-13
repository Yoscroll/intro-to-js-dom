console.log("sanity check");
//Finding HTML elements

//ID
//console.log(document.getElementById('use-id-method'));
var idElement = document.getElementById("use-id-method");
console.log(idElement);

//TAG
//console.log(document.getElementsByTagName('script'));
var tagElement = document.getElementsByTagName('script');
console.log(tagElement);

//CLASS
//console.log(document.getElementsByClass('use-class-method'));
var classElement = document.getElementsByClassName('use-class-method');
console.log(classElement);

//changing HTML elements

//ID
console.log(idElement.innerHTML);
idElement.innerHTML="I have been changed";

//chnage second HTML element with class
console.log(classElement[1].innerHTML)
classElement[1].innerHTML = "I have been changed by class name and array location";

