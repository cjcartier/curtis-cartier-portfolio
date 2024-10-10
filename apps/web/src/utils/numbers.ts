export const getRandomInt = (max: number, exclude?: number | null): number => {
  const num = Math.floor(Math.random() * max);

  return num === exclude ? getRandomInt(max, exclude) : num;
};
