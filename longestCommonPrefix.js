/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0){
        return '';
    }
    strs = strs.sort();
    function findPrefix(word, arr){
        if(word == ''){
            return '';
        }
        if(arr.every(i => i.startsWith(word))){
            return word;
        }
        
        return findPrefix(word.slice(0, word.length-1), arr);
    }
    
    return findPrefix(strs[0], strs);
};

["flower","flow","flight"]