const checkAdjacentAlphabet = (str) => {
    // let newStr = ''
    // for(let i = 0; i < str.length - 1; i++){
    //         if(str[i] != str[i + 1]){
    //             newStr += str[i]
    //         }
    // }
    // console.log(newStr)

    // method 2
    let shitftedStr = str.slice(1) + " "
    let res = ''
    for(let i=0; i<str.length; i++){
        if(str[i] !== shitftedStr[i]){
            res+=str[i]
        }
    }
    console.log(res)
}

checkAdjacentAlphabet('abacccabddefee')