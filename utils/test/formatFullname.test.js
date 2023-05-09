const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return formatted name when given valid input', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOhN DoE')).to.equal('John Doe');
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
  });

  it('should return "Error" when input is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return "Error" when input is not a string', () => {
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(123)).to.equal('Error');
    expect(formatFullname(['john doe'])).to.equal('Error');
    expect(formatFullname({fullName: 'john doe'})).to.equal('Error');
  });

  it('should return "Error" when input has incorrect format', () => {
    expect(formatFullname('john')).to.equal('Error');
    expect(formatFullname('doe')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John Test Doe')).to.equal('Error');
    expect(formatFullname('John ')).to.equal('Error');
    expect(formatFullname(' Doe')).to.equal('Error');
  });
});
