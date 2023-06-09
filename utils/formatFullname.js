module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const nameArray = fullName.trim().split(' ');
  if (nameArray.length !== 2) return 'Error';
  const [firstName, lastName] = nameArray;
  if (!firstName || !lastName) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
