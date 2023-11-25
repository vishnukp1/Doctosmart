const postiveLast = (arr) => {
  var arr1 = [];
  var arr2 = [];

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  console.log("result", arr1.concat(arr2));
};

postiveLast([-12, 11, -13, -5, 6, -7, 5, -3, -6]);
