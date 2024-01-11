// slide show javaScrpit gotten from W3school 
//https://www.w3schools.com/w3css/w3css_slideshow.asp

//automatic slideshow template.
// var myIndexX = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides1");

//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }

//   myIndexX++;
//   if (myIndexX > x.length) {myIndexX = 1}   
//   x[myIndexX-1].style.display = "block";  
//   setTimeout(carousel, 9000);    
// }

// slide show javascript for more than one slide show. from w3School
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_two

//I combine the two to make the javascript below
var slideIndex = [0,0];
var slideId = ["mySlides1", "mySlides2"]
showDivs1();
showDivs2();

function showDivs1() {
  var i;
  var no = 0;
  var x = document.getElementsByClassName(slideId[no]);

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex[no]++;
  if (slideIndex[no] > x.length) {slideIndex[no] = 1} 
  x[slideIndex[no]-1].style.display = "block";  
  setTimeout(showDivs1, 5000);  
}

function showDivs2() {
    var i;
    var no = 1;
    var x = document.getElementsByClassName(slideId[no]);
  
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    slideIndex[no]++;
    if (slideIndex[no] > x.length) {slideIndex[no] = 1} 
    x[slideIndex[no]-1].style.display = "block";  
    setTimeout(showDivs2,5000);  
  }