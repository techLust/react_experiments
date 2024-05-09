const checkParenthesis = (str) => {
    let openPar = ''
    let closePar = ''
    let parenthesis = ''

    for(let i = 0; i < str.length; i++){
        if(str[i] == '(' || str[i] == '{' || str[i] == '[') { 
            openPar = str[i]
            
            if(openPar == '(') closePar = ')'
            if(openPar == '{') closePar = '}'
            if(openPar == '[') closePar = ']'
         } 
            for(let j = i + 1; j < str.length; j++){
                parenthesis = openPar + closePar

                if(str[i] + str[j] == parenthesis ){
                    return true
                }
            }
            return false
    }
}

console.log(checkParenthesis('{[()()({()})()]}'))