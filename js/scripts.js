function triangles(){

var side1 = parseFloat(document.getElementById('side1').value);
var side2 = parseFloat(document.getElementById('side2').value);
var side3 = parseFloat(document.getElementById('side3').value);

// var side1side2 = side1 + side2;
// var side1side3 = side1 + side3;
// var side2side3 = side2 + side3;

if(side1 >= (side2+side3)|| side2 >= (side1+side3)||side3 >= (side2+side1)){
      result.innerHTML ="not a triangle";
    } else if(side1==side2 && side2==side3) {
      result.innerHTML ="equilateral";
    } else if(side1==side2 || side2==side3 || side1==side3){
      result.innerHTML ="isoceles";
    } else {
      result.innerHTML ="scalene";
    }
    // var displayWord =function(words){}
    // var words =["Refresh page", to see more]
    // words.forEach(funtion(word){
    // alert(word);
    //   });
    }
function reload() {
  location.reload();
}
