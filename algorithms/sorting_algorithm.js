// Bubble Sort
/**
const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
bubbleSort(nums);
console.log(nums);
*/

// Selection sort
const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimum = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) {
        minimum = j;
      }
    }
    array[i] = array[minimum];
    array[minimum] = temp;
  }
}
selectionSort(nums);
console.log(nums);
