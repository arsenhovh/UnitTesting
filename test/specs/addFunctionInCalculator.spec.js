const Calculator = require("../../app/calculator");
const {expect} = require("chai");
const chai = require('chai');
const should = chai.should();

describe("trying to check add function in Calculator", function (){
    let calc ;
    beforeEach(function (){
        calc = new Calculator();
    });
    afterEach(function (){
        calc = null ;
    });
    it("should return number 5", function (){
        expect(calc.add(2,3)).to.be.equal(5);
    });
    it("should throw error", function (){
        calc.add(-5,null).should.be.a('string');
    });
    it("should throw error", function (){
        calc.add(-5,undefined).should.be.a('string');
    });
    it("should throw error", function (){
        calc.add("7",0).should.be.a('string');
    });
    it("should throw error", function (){
        calc.add(900719925474,8).should.be.a('string');
    });
    it("should return number 3", function (){
        expect(calc.add(0,3)).to.be.equal(3);
    });
    it("should return number -9", function (){
        expect(calc.add(-12,3)).to.be.equal(-9);
    });
    it("should return number -15", function (){
        expect(calc.add(-12,-3)).to.be.equal(-15);
    });
});