const quickSort = (array, pivot) => {
    let left = array.filter( a => a < pivot).sort( (a,b) => {return a - b})
    let equal = array.filter( a => a === pivot)
    let right = array.filter( a => a > pivot).sort( (a,b) => {return a - b})

    return left.concat(equal.concat(right))
}

function processData(input) {
    let ar = input.split('\n').map( a => a.split(' ').map(Number))[1]
    let pivot = ar [0]

    console.log(quickSort(ar,pivot).join(' '))
} 
