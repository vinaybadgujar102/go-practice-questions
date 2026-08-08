export const rows = (n) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }

    const prevRow = result[i - 1];
    const currRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(prevRow[j - 1] + prevRow[j]);
      }
    }

    result.push(currRow);
  }

  return result;
};