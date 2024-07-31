
export const getCleanName = (letter: string): string => {
  const str = letter.split(' ').slice(-1).pop();

  return typeof str !== 'undefined' ? str : '';
}
