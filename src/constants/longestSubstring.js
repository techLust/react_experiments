const checkLogestSubStr = (str) => {
    let resultStr = ''
    let nonRepet = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] != str[i + 1]){
            nonRepet += str[i]
        }else{
            if(nonRepet.length > 0){
                resultStr += nonRepet + ' '
                nonRepet = ''
            }
        }
    }
    const strLength = resultStr.split(' ').map(el => el.length).reduce((acc, el) => {
        if(el > acc) {
            return el
        }
        return acc
    }, -Infinity)

    console.log(resultStr)
    console.log(strLength)
}

checkLogestSubStr('sjnffmmmmmmxjxjfjkdfhsfifdjkfjfuweic')