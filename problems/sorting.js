//Sorting algorithms
function selectionSort(a) {
    let temp, iMin;
    for(let i = 0; i < a.length; i++) {
      iMin = i;
      for (j = i+1; j < a.length; j++) {
        if (a[j] < a[i]) {
          iMin = j;
        }
      }
      temp = a[iMin];
      a[iMin] = a[i];
      a[i] = temp;
    }
    return a;
  }
  
  //bubble sort
  
  function bubbleSort(a) {
    for(let i = 0; i < a.length- 1; i++) {
      for (let j = 0; j < a.length - i; j++) {
        let temp;
        if (a[j+1] < a[j]) {
          temp = a[j+1];
          a[j+1] = a[j];
          a[j] = temp;
        }
      }
    }
    return a;
  }
  
  function insertionSort(a) {
    let value, hole;
    for (let i = 1; i < a.length; i++) {
      value = a[i];
      hole = i;
      while(hole > 0 && a[hole - 1] > value) {
        a[hole] = a[hole - 1];
        hole--;
      }
      a[hole] = value;
    }
    return a;
  }
  
    function merge(a, b) {
    let i = 0;
    let j = 0;
    let c = [];
    while(i < a.length && j < b.length) { 
      if (a[i] < b[j]) {
        c.push(a[i]);
        i++;
      } else {
        c.push(b[j]);
        j++;
      }
    }
    while(i < a.length) {
      c.push(a[i]);
      i++;
    }
    while(j < b.length) {
      c.push(b[j]);
      j++;
    }
    return c;
  }
  function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let midIndex= Math.floor(arr.length/ 2);
    let left = arr.slice(0, midIndex);
    let right  = arr.slice(midIndex, arr.length);
    return merge(mergeSort(left), mergeSort(right))
  }
  
  function swap(arr, index1, index2) {
    let temp;
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp; 
  }
  function partition(arr, start, end) {
    let i;
    let pivot;
    let pIndex;
    pivot = arr[end];
    pIndex = start;
    for (i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        swap(arr, pIndex, i);
        pIndex++;
      }
    }
    swap(arr, pIndex, i);
    return pIndex;
  }
  function quickSort(a, start, end) {
    if (start < end) {
      let p = partition(a, start, end);
      quickSort(a, start, p-1);
      quickSort(a, p+1, end);
    }
  }
  var a = [9,6,5,4];
  quickSort(a, 0, 3)
  console.log(a);
  
  
  
  
  
  
  
  
  
  
  
  
  