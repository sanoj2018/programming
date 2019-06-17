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
function rotateArrayBy90Left(twoDArray) {
  let cloneArry = twoDArray.slice();
  let newArray = [];
  for(let j = 1; j <= cloneArry.length; j++) {
    let items = twoDArray.shift();
    for (let k = items.length - 1, n = 0; k >= 0; k--, n++) {
      if (!Array.isArray(newArray[n])) {
        newArray[n] = [];
      }
      newArray[n].push(items[k]);
    }
  }
  display2DArrayInTableForm(newArray);
}

rotateArrayBy90Left(fullArray);