var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

var jsonStr = JSON.stringify(list);

console.log(list);

document.getElementById('output').innerHTML = jsonStr;


function arrayToList() {

    var myObjList = {
        value: 2,
        rest: null
    }


    myObjList.push()

}