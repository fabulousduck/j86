"use strict"

module.exports = {
    lex: (source) => {
        return source.split("\n")
            .filter(emptyLine)
            .filter(isNotComment)
            .map((str) => { return str.replace(" ", "")})
            .map(parseLine)
    }
}



function emptyLine(str) {
    return !str == ""
}

function isNotComment(string) {
    return string[0] == ";" ? false : true
}


function parseLine(line, index) {
    
    let totalConsumedChars = 0
    let node = {
        instruction: "",
        params : []
    };
    console.log(line)
    if(type(line[0]) != "char" && line[0] != "_") {
       throw new Error(`[${index}] Invalid ASM : ${line[0]}`)
   }

    const {instruction, consumed} = peekTypeN("char", line, 0)
    node.instruction = instruction
    totalConsumedChars += consumed
    console.log(node)
    return
}

function type(str) {
    const chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]
    const symbols = [";", ",", ".", "\""]

    if(chars.includes(str)) {
        return "char"
    }

    if(numbers.includes(str)) {
        return "number"
    }

    if(symbols.includes(str)) {
        return "symbol"
    }
}

function peekTypeN(t, line, offset) {
    
    const st = line.split(" ").head()
    return {string: st, consumed: st.length}
}
