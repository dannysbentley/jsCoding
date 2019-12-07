var arr1 = [1,12,15,26,38];
var arr2 = [2,13,17,30,45];

function mean(arr1, arr2) {
    var arr = arr1.concat(arr2);
    arr = arr.sort((a, b) => a-b);
    var mean = (arr[arr.length/2 - 1] + arr[arr.length/2])/2;
    console.log(mean);
}

mean(arr1, arr2);