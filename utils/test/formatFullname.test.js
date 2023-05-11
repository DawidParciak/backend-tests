const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return formatted name when given valid input', () => {
    expect(formatFullname('john doe')).to.be.equal('John Doe');
    expect(formatFullname('JOhN DoE')).to.be.equal('John Doe');
    expect(formatFullname('amanda doe')).to.be.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.be.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.be.equal('John Doe');
  });

  it('should return "Error" when input is empty', () => {
    expect(formatFullname('')).to.be.equal('Error');
  });

  it('should return "Error" when input is not a string', () => {
    expect(formatFullname(null)).to.be.equal('Error');
    expect(formatFullname(undefined)).to.be.equal('Error');
    expect(formatFullname(123)).to.be.equal('Error');
    expect(formatFullname(['john doe'])).to.be.equal('Error');
    expect(formatFullname({fullName: 'john doe'})).to.be.equal('Error');
  });

  it('should return "Error" when input has incorrect format', () => {
    expect(formatFullname('john')).to.be.equal('Error');
    expect(formatFullname('doe')).to.be.equal('Error');
    expect(formatFullname('John Doe Test')).to.be.equal('Error');
    expect(formatFullname('John Test Doe')).to.be.equal('Error');
    expect(formatFullname('John ')).to.be.equal('Error');
    expect(formatFullname(' Doe')).to.be.equal('Error');
  });
});
