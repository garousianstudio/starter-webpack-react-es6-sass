/**
 * convert latin numbers to persian
 *
 * @param {string|number} input
 */
export const latinToPersian = input => {
  let result;

  if (input === null || typeof input === 'undefined') return input;

  result = input.toString().replace(/0/g, '۰');
  result = result.replace(/1/g, '۱');
  result = result.replace(/2/g, '۲');
  result = result.replace(/3/g, '۳');
  result = result.replace(/4/g, '۴');
  result = result.replace(/5/g, '۵');
  result = result.replace(/6/g, '۶');
  result = result.replace(/7/g, '۷');
  result = result.replace(/8/g, '۸');
  result = result.replace(/9/g, '۹');

  return result;
};

/**
 * check if input structure is valid for email
 *
 * @var  {string} input
 */
export const isEmailValid = input => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i.test(input);