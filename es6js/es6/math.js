

let numbers = ['1','2','3','4','5']
let characters = ['+', '-', '*', '/']
// 获得算式
function add (num, char) {
    let str = ''
    for (let index = 0; index < num.length; index++) {
        if (char[index]) {
            str += num[index] + char[index]
        } else {
            str += num[index]
        }
    }
    return str
}

// 排列
function permute(temArr,testArr){
    var permuteArr=[];
    var arr = testArr;
    function innerPermute(temArr){
          for(var i=0,len=arr.length; i<len; i++) {
              if(temArr.length == len - 1) {
                  if(temArr.indexOf(arr[i]) < 0) {
                      permuteArr.push(temArr.concat(arr[i]));
                  }
                  continue;
              }
              if(temArr.indexOf(arr[i]) < 0) {
                  innerPermute(temArr.concat(arr[i]));
              }
          }
      }
  innerPermute(temArr);
  return permuteArr;     
 }

let numRange = permute([],numbers)
let charRange = permute([],characters)
for (let i = 0; i < numRange.length; i++) {
    for (let j = 0; j < charRange.length; j++) {
        let res = add(numRange[i],charRange[j])
        // console.log(eval(res))
        if (eval(res) === 10) {
            console.log(res)
        }
    }
}