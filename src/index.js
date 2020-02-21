
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix ||matrix.length === 0) {
    return [];
  }

  return matrix.reduce((res, item, index) => {
    if (index % 2 === 0) {
      return res = res.concat(item);
    } else {
      return res = res.concat(item.reverse());
    }
  }, []);
}
