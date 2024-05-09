
const findMax = (arr) => {
const maxNo = arr.reduce((acc, el) => {
    if(el > acc) {
        return el
    }
    return acc
    // return Math.max(acc, el)
}, -Infinity)

console.log(maxNo)
}

findMax([3, 5, 9, 11, 20])

