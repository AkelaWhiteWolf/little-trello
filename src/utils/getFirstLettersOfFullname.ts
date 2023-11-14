type Params = string | { first: string; last: string };

export function getFirstLettersOfFullname(name: Params) {
  if (typeof name === 'string') {
    const array = name.split(' ');
    return `${array[0][0] || ''}${array[1]?.[0] || ''}`.toUpperCase();
  }

  return `${name.first[0] || ''}${name.last[0] || ''}`.toUpperCase();
}
