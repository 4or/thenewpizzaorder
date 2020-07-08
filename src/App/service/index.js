
export function PizremoveDuplicates(originalArray, prop) {
    var newArray = [];
    var ObjFind  = {};
  
    for(var i in originalArray) {
       ObjFind[originalArray[i][prop]] = originalArray[i];
    }
  
    for(i in ObjFind) {
        newArray.push(ObjFind[i]);
    }
     return newArray;
}

export function SumTotalPrice(a,b) {
    return a + b
}