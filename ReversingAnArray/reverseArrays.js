var welcome = "Hello World";
var num = [1, 5, 3, 4, 5, 6, 20, 8, 9, 10]
var letters = ["A", "B", "C", "D", "E", "F", "G"]
var pendingOutput = 'Pending output...'

    function reverseArray(myArr) {

        var rebuildArray = [];

        for (i = myArr.length; i >= 0; i--) {
            rebuildArray.push(myArr[i]);
        }

        rebuildArray.shift();

        pendingOutput = myArr + '<br>' + rebuildArray;
        document.getElementById('output').innerHTML = pendingOutput;

        return rebuildArray;

    }

console.log( reverseArray(letters) );


/*
    TODO refactor my code.
    *==*
*/

function reverseArrayInPlace(myArr) {

    var holdVal = myArr;
    
    console.log("The array is : " + holdVal);
  
    for (i = holdVal.length; i >= 0; i--) {
        holdVal.push(myArr[i]);
    }  
    
    console.log("The new array is : " + holdVal);
    console.log("The lenght is : " + holdVal.length);
    
    var halfArray = holdVal.length/2;
    
    holdVal.splice(0, halfArray);
    holdVal.shift();
        
    console.log("The spliced vr of the array is : " + holdVal);
}


