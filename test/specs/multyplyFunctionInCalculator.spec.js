const Calculator = require("../../app/calculator");
const {expect} = require("chai");
const chai = require('chai')
const should = chai.should();


describe("trying to check multiply function in Calculator", function (){
    let calc ;
    beforeEach(function (){
        calc = new Calculator();
    });
    afterEach(function (){
        calc = null ;
    });
    it("should return number 6", function (){
        expect(calc.multiply(2,3)).to.be.equal(6);
    });
    it("should throw error", function (){
        calc.multiply(-5,null).should.be.a('string');
    });
    it("should throw error", function (){
        calc.multiply(-5,undefined).should.be.a('string');
    });
    it("should throw error", function (){
        calc.multiply("7",0).should.be.a('string');
    });
    it("should throw error", function (){
        calc.multiply(90071900925474,8).should.be.a('string');
    });
    it("should return number 0", function (){
        expect(calc.multiply(0,3)).to.be.equal(0);
    });
    it("should return number -36", function (){
        expect(calc.multiply(-12,3)).to.be.equal(-36);
    });
    it("should return number 24", function (){
        expect(calc.multiply(-12,-2)).to.be.equal(24);
    });
    it("should return number 0", function (){
        expect(calc.multiply(0,0.5)).to.be.equal(0);
    });
});