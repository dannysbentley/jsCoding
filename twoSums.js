// given the two arrays find two number that make up the sum. 
var numbers = [2,7,11,15];
var target = 9;

var twoSum = function (numbers, target) {
    for(i =0; i < numbers.length; i++){
        result = target - numbers[i];
        var idx = numbers.findIndex(x => x == result);
        console.log(idx)
        if(idx > -1 && idx != i){
            return [i, idx]
        }
    }
    return null;
}

console.log(twoSum(numbers, target));
