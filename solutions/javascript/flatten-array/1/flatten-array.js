//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (arr) => {
  let result = []

  for (let index = 0; index < arr.length; index++) {
    let ele = arr[index]
    if(Array.isArray(ele)) {
      let res = flatten(ele);
      result = [...result, ...res];
      continue
    }

    if(ele === null) {
      continue;
    }

    result.push(ele)
  }

  return result
};
