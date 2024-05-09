const checkPriority = (arr) => {
    const obj = {}

    const originalArr = [...arr]

    const sortedArr =  arr.sort((a, b) => {
        return a-b
    })

    sortedArr.forEach((el, i) => {
        obj[el] = i
    })

    const priorityArr = originalArr.map(el => {
        obj[el] == el
        return arr.length - obj[el]
    })

    console.log(obj)
    console.log(originalArr)
    console.log(priorityArr)

}

checkPriority([15, 8, 20, 16, 9])