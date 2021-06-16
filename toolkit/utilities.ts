export const firstUpper = (name: string): string =>
  `${name[0].toUpperCase()}${(name as string).slice(1)}`;

export const formalName = (name: string): string => {
  const noHyphenNameParts = name.toLowerCase().split('-');
  return noHyphenNameParts.map((part: string) => firstUpper(part)).join('');
};

export const dotName = (name: string): string =>
  name.toLowerCase().replace(/-/g, '.');
