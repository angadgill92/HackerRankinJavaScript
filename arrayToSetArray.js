// Function to convert iterable to set
function toSet(iterable){
	/*Takes an iterable and converts it into another array of unique elements*/
	var arrTemp = iterable;
	if (typyof (iterable) === 'string'){
	var arrTemp = iterable.split('');}
	arrTemp.sort(); // Need to write a proper sort function, JS only compares the first characters
	var setArray = []; 				// array to hold unique elements
	 while(arrTemp.length != 0){
	 	var element = arrTemp[0];
	 	var index = arrTemp.lastIndexOf(element);
	 	setArray.push(element);
	 	arrTemp = arrTemp.slice(index+1)
	 }

}