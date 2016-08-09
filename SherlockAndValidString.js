//Sherlock And Valid string

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

//--------------------------IGNORE
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function main(){
    
    var s = readLine();
    s = s.split('');
    //var countArray = elementCountArray(s);
function countPush(iterable){
    iterable.sort();
    //console.log(iterable);
    var array = iterable;
  	var countArray = [];
    while(array.length != 0){
        var element = array[0];
        var l = array.lastIndexOf(element);
        var f = array.indexOf(element);
        var count = l-f+1;
        countArray.push(count);
        array = array.slice(l+1);
    }
    countArray.sort();
 return countArray;   
}
var array = countPush(s);
    
    //console.log(array);
    var maxLength = getMaxOfArray(array); // last element of the array
    //console.log(maxLength);
    var minLength = getMinOfArray(array);
    //console.log(minLength);
    
    if (maxLength==minLength) // if all th characters occur the same number of times
        console.log('YES');
    else if ((maxLength-minLength===1) && ((array.indexOf(minLength)===array.lastIndexOf(minLength)) || (array.indexOf(maxLength)===array.lastIndexOf(maxLength))))
        console.log('YES'); // if difference between the max length and min length is 1 and there is only one
        // minlength character or only one maxLength character, such that removing/adding that character makes the 
        //number of occurences of all characters equal, print yes
    else if ((minLength===1) && (array.indexOf(minLength)===array.lastIndexOf(minLength)));
        console.log('YES'); // if the minimum length substring is one character long
        //print yes
    else
        console.log('NO'); // for all other cases print no
}