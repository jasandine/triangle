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
