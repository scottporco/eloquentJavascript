var myList = [1, 2, 3, 4]


function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    console.log(JSON.stringify(list));
    return list;
}