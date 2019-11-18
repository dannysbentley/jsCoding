var palindrome = 'Do geese see God!';
// var palindrome = 'Noon';

function palindromes(words){
    // using Regex to search for spaces
    words = words.replace(/\s|[.!]/g, '');
    // make all letter lowercase. 
    words = words.toLocaleLowerCase();
    // Convert word to array with split, reverse array and use join to convert to string. 
    revWords = words.split('').reverse().join('');

    // Convert string to array using split then count length
    if(words.split('').length < 2){
        return isPalindrome = false;
    }

    // return boolean test. 
    return words === revWords;
};

var word = palindromes(palindrome);
console.log(word)