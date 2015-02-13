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

});