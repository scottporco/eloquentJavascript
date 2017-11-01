var sampleList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

var y = [1, 2, 3]

function arrayToList(array) {
    var list = null;

    for (var i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
};


function listToArray(list) {
    newArray = [];
    for (var node = list; node; node = node.rest) {
        newArray.push(node.value)
    }
    return newArray;

};

function prepend(element, list) {
    list = { value: element, rest: list };
    return list;
}

function nth(list, index) {

    if (list != null) {
        if (index > 0) {
            return nth(list.rest, index - 1);
        } else {
            return list.value;
        }
    } else {
        return undefined;
    }
}



document.getElementById('output1').innerHTML = JSON.stringify(arrayToList(y));

document.getElementById('output2').innerHTML = listToArray(arrayToList(y));

document.getElementById('output3').innerHTML = JSON.stringify(prepend(10, prepend(20, null)));

document.getElementById('output4').innerHTML = JSON.stringify(nth(arrayToList([10, 20, 30]), 1));