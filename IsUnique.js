// var str = 'UniQ';
var str = 'this this';

class obj{
    constructor(char){
        this.char = char;
        this.count =0;
    }
}
function isUnique(str) {
    arrObj = [];  

    str = str.toLocaleLowerCase().replace(/\s/g,'').split('');

    for(i = 0; i < str.length; i++){
        var f_index = arrObj.findIndex(x => x.char == str[i]);
        console.log(f_index);
        if(f_index == -1){
            var o = new obj(str[i]);
            o.count = o.count + 1;
            arrObj.push(o); 
        }
        else{
            arrObj[f_index].count = arrObj[f_index].count + 1;
        }
    }

    var arr_found = arrObj.filter(j => j.count > 1);
    console.log(arrObj);

    if(arr_found.length > 1){
        return 'not unique'
    }
    else{
        return 'unique';
    }
}

var result = isUnique(str);

console.log(result)