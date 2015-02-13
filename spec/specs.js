describe("triangleMath", function() {

  it("is a equilateral triangle if all three sides are equal", function() {
    expect(triangleMath(2, 2, 2)).to.equal("equilateral");  
  });

  it("is a isosceles triangle if 2 sides are equal", function() {
    expect(triangleMath(2, 3, 3)).to.equal("isosceles");
  });

  it("is a scalene triangle if no sides are equal", function() {
    expect(triangleMath(1, 2, 3)).to.equal("scalene");
  });

  it("is not a triangle if one side is at least as long as the other two sides combined", function() {
    expect(triangleMath(1, 1, 4)).to.equal("that is not a triangle");
  });

});