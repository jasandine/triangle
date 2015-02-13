var triangleMath = function(x,y,z) {

  var results = "";

  if (x === y && y === z) {
    results = "equilateral";
    return results;
  }  else if (x === y || x === z || z === y) {
    results = "isosceles";
    return results;
  }
    
};
