"use strict"

const fs = require("fs")
const lexer = require("./lexer.js")

emulate()

function emulate() {
    fs.readFile( __dirname + "/example.asm", (err, data) => {
        if(err) {
            throw new Error(err)
        } 
        const tokens = lexer.lex(data.toString())
        console.log(tokens)
    })
}