const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return correctly formatted fullname with proper capitalization', () => {
        expect(formatFullname('jOHn dOE')).to.equal('John Doe');
        expect(formatFullname('aMAnda doe')).to.equal('Amanda Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('JOHN doE')).to.equal('John Doe');
    });

    it('should return "Error" if no argument is provided', () => {
        expect(formatFullname()).to.equal('Error');
    });

    it('should return "Error" if argument is not a string', () => {
        expect(formatFullname(123)).to.equal('Error');
        expect(formatFullname(null)).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
    });

    it('should return "Error" if the format of input data is not <firstname> <lastname>', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
    });
  
});