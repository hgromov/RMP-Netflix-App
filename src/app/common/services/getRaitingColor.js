export default (raiting) => {
  if (raiting <= 2) return 'red';
  if (raiting < 4) return 'orange';
  return 'green';
};
