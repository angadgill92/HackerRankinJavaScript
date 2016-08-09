// Simple Array Sum
// 3-Aug-2016
// angadgill92

function arraySum(array){
	/*Takes an array as input and returns it's sum*/
	if (array.length === 0){
		// base case, if array is empty -> length == 0
		//return 0;
		return 0;
	
	} else {
		//resursive step
		// return first element + sum of rest of the array
		return array[0] + arraySum(array.slice(1));
	}

} // simpleArraySum ends

console.log(arraySum([1,2,2,3,4]));
// -> output = 12


//Compare the triplets
// 3-Aug-2016
// angadgill92

function compareTriplets(alice,bob){
    /* takes in two arrays of same length and prints the scores*/
    var index = alice.length-1; 
    var aPts=0;
    var bPts=0;
 for ( var i = 0; i<=index ;i++){
     if(alice[i] === bob[i]){
         
     } else if (alice[i] > bob[i]){
         aPts += 1;
     } else if (alice[i] < bob [i]){
         bPts += 1;
     }
    }
   console.log(aPts,bPts);
 }

// Diagonal Difference
function diagonalDifference(array,n){
    var fwdSum=0; // sum of forward diagonal
    var bckSum=0; // sum of backward diagonal
    
    for (var i = 0; i<n ;i++){
        fwdSum += array[i][i]; // sums up the fwd diagonal elements
        }
    for (var j = 0; j<n; j++){
        bckSum += array[j][n-j-1]; // sums up the backward diagonal elements
    }
    return Math.abs(fwdSum-bckSum); // returns the absolute value of diagonal difference
    
        
}

// concatenate string to itself n times

function strRepeat(str,times){
  /*takes a string (str) and a number (n), 
  and returns the string concatenated to itself n times   */
  
  if (str === "") // base case, if string is empty, return string
    return "";
  else if(times === 0) // base case 2, if times =0 return empty string
    return "";
  else 
    return str + strRepeat(str,times-1); // recursive call, concatenates string
}

//staircase

function staircase(n)
{ /* prints out a staircase*/
    var str1=" ";
    var str2="#";
    for(var i=1; i<=n ;i++)
        {console.log(strRepeat(str1,(n-i))+ strRepeat(str2,i));}
        
}

// AM-PM to hour time notation

function toHours(time){
    if(time[8] === 'P' && time.slice(0,2) == '12') // if time is in PM and HH = 12
       return '12' + time.slice(2,8);
    
    else if(time[8]=== 'P' ) 
        return String(Number(time.slice(0,2)) + Number(12)) + time.slice(2,8);
    
    else if (time[8] === 'A' && time.slice(0,2) === '12')//  if it is 12AM , returns 00 in place of HH
        return '00'+time.slice(2,8);
    
    else // for all AM times
        return time.slice(0,8);
    
}

//circular rotation

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
//-----------------------------------------------------


function main() {
    //Enter your code here
     var inputArray= readLine().split(' '); // maps the space separated input to n,kand q
    inputArray = inputArray.map(Number);
    var n = inputArray[0];
    var k = inputArray[1];
    var q = inputArray[2];
    
    var arr = readLine().split(' ');
    //console.log(arr);
    arr = arr.map(Number);
    //console.log(arr);
    var length = arr.length
    
    var r = (k % n); // r is the required number os rotations;
    
    arr = arr.slice((length-r)).concat(arr.slice(0,(length-r))); // attaches 
    //console.log(arr);
    
    for(var i=0;i<q;i++){
        var index = Number(readLine());
        console.log(arr[index]);
    }
};
// circular rotation ends

// Kangaroo 

function kangaroo(k1,k2){
    /* takes the position and velocity vector of both kangaroos as input
    and returns YES if they land at the same position, and NO otherwise
    */
    //console.log(k1,"\n",k2);
    
    var relDistance = k2[0]-k1[0];
    
    var relVelocity = Math.abs(k1[1]-k2[1]);
    
    if (k2[1]>=k1[1]) // if the velocity of both kangaroos is the same
        {return ('NO');}
    else if (relDistance % relVelocity === 0) // if the relative distance is exactly divisible by the relative velocity
        return ('YES');
    else // if relative distance is not divisible by relative velocity 
        return ('NO');
}


// lisa's workbook
function main(){
    var arr_temp = readLine().split(' ');
    var n = parseInt(arr_temp[0]); // total number of chapters
    var k = parseInt(arr_temp[1]); // problem's per page
    
    var problemsOf = readLine().split(' ');
    problemsOf = problemsOf.map(Number); // array to store number of problems per chapter
    console.log(problemsOf);
    var splCount = 0;       // number of special problems
    var chapterNumber = 0;  // number of current chapter
    var pageNumber = 1;     // Starting from page 1
    var problemNumber = 1;  // Starting from the frst problem
    
    while (chapterNumber < n) { 
        if (problemNumber === pageNumber && pageNumber <= (Math.min((problemNumber + k - 1), problemsOf[chapterNumber])))
        {splCount++ ; console.log(problemNumber,pageNumber);}    // increment number of special problems by 1
           // pageNumber++;       // increment page number
            //problemNumber += k;
        pageNumber++;       // increment page number
        problemNumber += k; // increment problem Number by k
        
        if(problemNumber > problemsOf[chapterNumber]){ // if the new problem number obtained is greater than
            chapterNumber++;// increment chapter number by one
            problemNumber=1;//
        }
    }
console.log(splCount);
    
    
}

// minimum distance

function main() {
    var n = parseInt(readLine());
    A = readLine().split(' ');
    A = A.map(Number);
    var distance = [];
    for (var i=0; i<A.length-1 ; i++){
        
        for (var j =i+1; j<A.length ; j++ ){
            
                if (A[i]==A[j]){ // if ith element = jth element , push the difference in their indices to distance array
                        var d = j - i;    
                        distance.push(d);
                }
            }
        }
    if (distance.length===0) // if distance array is empty (i.e no same elements were found)
            console.log(-1); // print -1
    else {
        distance = distance.map(Number);
        console.log(getMinOfArray(distance)); // else print the minimum of the distance found
    }
    
}

// loaf count

function arraySum(array){
	/*Takes an array as input and returns it's sum*/
	if (array.length === 0){
		// base case, if array is empty -> length == 0
		//return 0;
		return 0;
	
	} else {
		//resursive step
		// return first element + sum of rest of the array
		return array[0] + arraySum(array.slice(1));
	}

} 
var loafCount = 0; // global variable denoting loaf count
function loaf(arr){
    
     if(arr.length === 0) { // if array is completely traversed return leafCount
         return loafCount;
        
    } else if (arr [0] % 2 === 0) 
        return loafCount + loaf(arr.slice(1));
      else {
        
          return loafCount + 2 + loaf(arr.slice(1));
    }
}

function main() {
    var N = parseInt(readLine());
    B = readLine().split(' ');
    B = B.map(Number);
    var loafCount = 0; 
    if(arraySum(B)%2!=0){
        console.log("NO");
    } else {
        console.log(loaf(B));
        
    }
    

}

// algorithms , strings, Super reduced string

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

//-------------------------------------------------

function reducedString(str){
    
    if (str==="") 								   // base case , if string is empty -> return empty string
        return "";
    else if (str[0]===str[1]) 					   // if first two element of the string are the same remove and return result for sliced string
        return reducedString(str.slice(2));
    else
        return str[0]+reducedString(str.slice(1)); // keep the first element and append the result of the rest of the substring to it
}

function main () {
    
    var inputString = readLine();
    //inputString = inputString;
    
    if (reducedString(inputString) != "")
        console.log(reducedString(inputString));
    else
        console.log("Empty String");
    
}

//---------------------------------------------------------

//--------------------PANgram------------------------

function setHasN(set, iterable){
    /* Takes a set and an iterable (array or string) as paramaeters and 
    returns the number of elements of the iterable present in the set
    Note: if all the elements of the iterable are present in the set
    the function will return the length of the set*/
    
    var count = 0;          // number of elements of the iterables present in the set
    for (var i = 0; i< iterable.length ; i++){
        if (set.has(iterable[i])) // using the .has method to check if the element is present in the set or not
            count += 1;
        else count += 0;
    }
    return count;
}



//-------------------------------------------------
function main(){
    var s = readLine();     // get input from user
    s = s.toLowerCase();    // change every thing to lower case
    s = s.split('');        // split the string into an array
    s.sort();               // sort the array
    s =new Set(s);          // remove duplicates from the array
    //s.delete(' ');        // delete space, from the set
   
    var alpha =[' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                // array of alphabets (also includes space)    
   
    
    if(setHasN(s, alpha)=== alpha.length) 
        /* if all letters of the alphabet (including space) are in the set,
           the count returned will match the length of the alpha array */
        {console.log('pangram');}
    else
        {console.log('not pangram');}
    
    
    
}

//----------------------
// Chaotic New Year

function chaoticNewYear(array){
    var count = 0; // stores the minimum number of bribes
         
    for (var i = array.length-1; i>=0  ;i--){
         
           if (array[i]-(i+1) >2){ /* if difference between ith element(i.e. number on the sticker)
                                        and the position of the person(i+1) is greater than 2
                                        return 'Too chaotic', since maximum positions a person can jump is 2*/  
               return 'Too chaotic';}
              
            for (var j= Math.max(0, array[i]-2); j<i; j++){ /* checks if the ith person has overtaken the jth person and increases count*/
               if (array[j]>array[i])
                   count++;
           }
       }
return count;   
}

//-------------------------------------------------------------------------------------------------------------

// Encryption

function encrypt(s){
    /* takes a string as an argument and returns the encrypted string */
    s = s.trim();                           // removing spaces (if any) from the ends of the input string
    var n = s.length;                       // string length
    var rootOfLength = Math.sqrt(s.length); // calculate L , i.e the square root of the length of the string
    var rows = Math.round(rootOfLength);    // rows will be the sqrt of string length
    var columns;
    
    // to ensure that rows x columns > string length
    if(rows >= rootOfLength) 
                /* if 'rows' (which is the rounded sqr root of length) >= root of length 
                (rows x columns) will be greater than or equal to the length of the string 
                therefore number of rows and columns an be the same*/
        columns = rows;
    else
                // else we add one more column 
        columns = rows + 1;
    
    var encryptedString=''; // variable to store the encrypted string
    
    for(var j = 0; j<columns ; j++){
        var word=''; // temporary variable to store the encrypted words generated
        for(var i=j; i<n;i+=columns) word = word+s[i]; // adds the [i][j]th element (where (i==j) ) to a word 
            encryptedString = encryptedString+word+' ';// adds the word to the encrypted string, along with a space at the end
    }
     encryptedString.trim(); // trim spaces (if any) from the output string
    return encryptedString;
}

//-----------------------------------------------------------------------------------------------

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
    
    if (maxLength==minLength)
        console.log('YES');
    else if ((maxLength-minLength===1) && ((array.indexOf(minLength)===array.lastIndexOf(minLength)) || (array.indexOf(maxLength)===array.lastIndexOf(maxLength))))
        console.log('YES');
    else
        console.log('NO');
}
///
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
function main (){
    var t = parseInt(readLine());
    for (var i = 0; i < t; i++ ){
        var stack1 = readLine();
        stack1 = stack1.split('');
        var stack2 = readLine('');
        stack2 = stack2.split('');
        console.log(minString(stack1,stack2));
    }
}


// Function to convert iterable to set
function toSet(iterable){
	if (typyof (iterable) === 'string'){
	arrTemp = iterable.split('');}
	arrTemp.sort();
	setArray = []; 				// array to hold unique elements
	 while(arrTemp.length != 0){
	 	var element = arrTemp[0];
	 	var index = arrTemp.lastIndexOf(element);
	 	setArray.push(element);
	 	arrTemp = arrTemp.slice(index+1)
	 }

}

//------------------------------------------------------------------------------
function minString(stackA,stackB){
    /*Takes two strings as input and returns the lexicographically minimum
    string that can be made by using their characters alternatively one at a time */
    
    // convert the strings into arrays
    stackA = stackA.split('');  
    stackB = stackB.split('');
    var tempArray = [];         // array to store the returned characters
    var last = '';              // variable to store the last stack that ws used
    while ((stackA.length != 0 )&& (stackB.length != 0)){ // while both of the strings are non-empty
        if (stackA[0] < stackB[0]){                       // if first character of stackA is smaller than stackB, push it into temp array
            tempArray.push(stackA.shift());
            last = 'A';                                   // set last = A
            }
        else if (stackA[0] === stackB[0]){                // if both stacks have the same character on top, pop the char 
                                                          // from the stack which was not used last
            if (last==='A'){
                tempArray.push(stackB.shift());
                last = 'B';}
            else{
                tempArray.push(stackA.shift());
                last = 'A';}
        } else {                                           // else pop the char from stack b and push it into the array
            tempArray.push(stackB.shift());
            last = 'B';
        }
    }
    if ((stackA.length != 0) && (stackB.length === 0)){   // if stack A is still not empty, push all characters in stack A to temp
        tempArray.push(stackA.join(''));
    
    } else if ((stackB.length != 0) && (stackA.length === 0)){ // else push the leftover of stack B to temp
        tempArray.push(stackB.join(''));}
var returnedString = tempArray.join('');                // join all the characters of temp
    return returnedString;                              // return the output string
}

//----------------------------------------alternating characters ---------------------------------

function deletionsRequired(string){
	/*takes a string as an input and returns the number of deletions required so that 
	  no two consecutive characters are the same*/
    var input = string; // local variable to store the string
    var count = 0;      // variable to hold the number of deletions required
    while(input!=''){
        if(input[0]===input[1]){    // if first two characters are the same, 
            input= input.slice(1);  // drop the first character
            count+=1;               // increase count by one
        } else
            input = input.slice(1)  // drop the first string and iterate again
    }
    return count;
}
//---------------------------------------------------------------------------
//Gemstones

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

function toSet(iterable){
	var arrTemp = iterable;
    if (typeof (iterable) === 'string'){
	arrTemp = iterable.split('');}
	
    arrTemp.sort();
	var setArray = []; 				// array to hold unique elements
	 while(arrTemp.length != 0){
	 	var element = arrTemp[0];
	 	var index = arrTemp.lastIndexOf(element);
	 	setArray.push(element);
	 	arrTemp = arrTemp.slice(index+1)
	 }
 return setArray;
}

function isGem(array){
    for (var i = 0 ; i < array.length; i++){
        array[i]=toSet(array[i]);
        }
    
}

function main(){
    var n =parseInt(readLine());
    var str = [];
    for (var i = 0; i < n; i++){
        str.push(readLine());
        }
    
    isGem(str);
    console.log(str);
}


