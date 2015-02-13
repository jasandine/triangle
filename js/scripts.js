var triangleMath = function(x,y,z) {

  var results = "";


  if (x + y >= z && x + z >= y && y + z >= x) {
    if ( x === y && y === z ) {
      results = "equilateral";

    } else if ( x === y || x === z || z === y ) {
      results = "isosceles";

    }  else  {
     results = "scalene";

   }
 }  else  {
  results = "that is not a triangle";

}
return results;

};

$(document).ready(function() {
  $("form#triangleMath").submit(function(event) {
    var x = parseInt($("input#x").val());
    var y = parseInt($("input#y").val());
    var z = parseInt($("input#z").val());
    var result = triangleMath(x, y, z);

    if (result === "that is not a triangle") {
      $(".sentence").text("that is not a triangle");
    } else if (result === "equilateral") {
      $(".sentence").text("equilateral");
    } else if (result === "isosceles") {
      $(".sentence").text("isosceles");
    } else if (result === "scalene") {
      $(".sentence").text("scalene");
    }

    $("#result").show();
    event.preventDefault();
  });
});


