export const getActiveElementIndex = (rotate: number, length: number) => {
  const rotIndex = Math.ceil(rotate / ((360 / length) * (length / 6)));
  const active = rotate <= 0 ? rotIndex * -1 : (rotIndex - 24) * -1;

  return active;
};
