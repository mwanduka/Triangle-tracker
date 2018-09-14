var side1 = parseInt(prompt('side1');
var side2 = parseInt(prompt('side2');
var side3 = parseInt(prompt('side3');
var triangle = [side1, side2];

if((side1 >= side2+side3)||(side2 >= side1+side3)||(side3 >= side2+side1)){
      ("#typeoftriangle").text("not triangle");
      alert(nottriangle);
    } else if(equilateral(side1,side2,side3)===true){
      ("#typeoftriangle").text("an equilateral");
      alert(equilateral);
    } else if(isoceles(side1, side2, side3)===true){
      ("#typeoftriangle").text("an isoceles");
      alert(isoceles);
    } else {
      ("#typeoftriangle").text("a scalene");
      alert(scalene);
    }
