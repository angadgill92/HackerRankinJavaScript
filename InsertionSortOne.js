function insert (array) { // takes an array as input and prints steps of insertion sort
    let tempArr = array
    let last = array[array.length-1]
    let index = tempArr.length - 2

    while (index >= -1 ) {
       if (tempArr[index] > last){
            tempArr[index + 1] = tempArr[index]
            console.log(tempArr.join(' '))
        } else if (tempArr[index] <= last ){

           tempArr[index + 1] = last
           console.log(tempArr.join(' '))
           break

        } else {
            tempArr[0] = last
            console.log(tempArr.join(' '))
            break

        }
        index--
    }

}
