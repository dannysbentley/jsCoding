/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = [];
    var count = 1;
    while(count < n+1){
        if(count%3 === 0 && count%5 === 0){
            result.push('FizzBuzz');
            count++;
            continue;
        }
        if(count % 3 === 0){
            result.push('Fizz');
            count++;
            continue;
        }
        if(count % 5 === 0){
            result.push('Buzz');
            count++;
            continue;
        }
        result.push(count.toString());
        count++;
    }
    return result;
};


let result = fizzBuzz(15);
console.log(result);
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”
