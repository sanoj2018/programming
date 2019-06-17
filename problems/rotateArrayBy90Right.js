let fullArray = [[1,2,3],[4,5,6],[7,8,9]];

function display2DArrayInTableForm(fullArray) {
  for(let innerArray of fullArray) {
    let str = '';
    for (let element of innerArray) {
      str+='  '+element;
    }
    console.log(str);
  }
}
function rotateArrayBy90Right(twoDArray) {
  let cloneArry = twoDArray.slice();
  let newArray = [];
  for(let j = 1; j <= cloneArry.length; j++) {
    let items = twoDArray.shift();
    for (let k = 0; k < items.length; k++) {
      if (!Array.isArray(newArray[k])) {
        newArray[k] = [];
      }
      newArray[k].push(items[k]);
    }
  }
  display2DArrayInTableForm(newArray);
}

rotateArrayBy90Right(fullArray);