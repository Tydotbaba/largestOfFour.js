function largestOfFour(arr) {
  // You can do this!
  let array = [];
  let value;

  for(let i = 0; i < arr.length; i++){
    value = arr[i][0];
    for(let j = 1; j < arr[i].length; j++){
      //if current value is greater than previous value
      //set new value to be current value in index
      if(arr[i][j] > value) value = arr[i][j];
    }
    array.push(value);
    //value = 0;
  }
  return array;
}


largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-1, -3, -17, -10]]);

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//largestOfFour([[13, 27, 18, 26], [4, 9, 10, 12], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

//largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
