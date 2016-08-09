//Staircase Pattern

function strRepeatR(str,times){
  /*takes a string (str) and a number (n), 
  and returns the string concatenated to itself n times 
  R at the end of the function name means Recursive this is usually slower
  I made this function as a JS counterpart to the python * opertor, 
  which allows us to repeat a string multiple times  */
  
  if (str === "") // base case, if string is empty, return string
    return "";
  else if(times === 0) // base case 2, if times =0 return empty string
    return "";
  else 
    return str + strRepeatR(str,times-1); // recursive call, concatenates string
}
//staircase

function staircase(n)
{ /* prints out a staircase*/
    var str1=" ";
    var str2="#";
    for(var i=1; i<=n ;i++)
        {console.log(strRepeatR(str1,(n-i)) + strRepeatR(str2,i));}
        
}