
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