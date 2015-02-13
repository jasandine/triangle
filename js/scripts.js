var triangleMath = function(x,y,z) {

  var results = "";


  if (x + y >= z && x + z >= y && y + z >= x) {
    if ( x === y && y === z ) {
      results = "equilateral";
      return results;

  } else if ( x === y || x === z || z === y ) {
    results = "isosceles";
    return results;

  }  else  {
     results = "scalene";
     return results;
 
  }

}  
};
