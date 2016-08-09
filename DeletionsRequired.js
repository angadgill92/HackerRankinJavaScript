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