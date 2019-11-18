/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var neg = null;
    x = x.toString();
    if(x[0] == '-'){
        neg = '-';
        x = x.replace(/[-]/g,'');
    }
    var strRev = x.split('').reverse((a,b) => a-b).join('');
    if(neg != null){
        strRev = neg + strRev;
    }
    if(Math.pow(-2,31) > parseInt(strRev) || parseInt(strRev) > Math.pow(2,32)){
        return 0
    }
    return strRev
};

var str = '-2147483648';
//var str = '-15';

console.log(reverse(str));