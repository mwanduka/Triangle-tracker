 var side3 = parseFloat(document.getElementById('side3').value);

var side1side2 = side1 + side2;
var side1side3 = side1 + side3;
var side2side3 = side2 + side3;

if((side1 >= side2+side3)||(side2 >= side1+side3)||(side3 >= side2+side1)){
      alert(not a triangle);
    } else if(equilateral(side1,side2,side3)===true){
      alert(equilateral);
    } else if(isoceles(side1,side2,side3)===true){
      alert(isoceles);
    } else {
      alert(scalene);
    }
    var displayWord =function(words){}
    var words =["Refresh page", to see more]
    words.forEach(funtion(word){
    alert(word);
      });
    }
function reload() {
  location.reload();
}
