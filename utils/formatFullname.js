module.exports = (fullName) => {
  if (!fullName || typeof fullName !== 'string') return 'Error';
  
  const names = fullName.split(' ');
  if (names.length !== 2) return 'Error';
  
  const [firstName, lastName] = names;
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
};
