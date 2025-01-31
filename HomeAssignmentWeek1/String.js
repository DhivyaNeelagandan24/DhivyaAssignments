//Example1
let Wmessage = "Hi Dhivya Neelagandan, Welcome to PW Learning Course"
let array = Wmessage.split(" ")
let oMessage = Wmessage.substring(46,52)
console.log(array)
console.log("The last word in the array is " , oMessage  + " with length",oMessage.length)


//Example2
let value = "Twinkle Twinkle  little   star "
let trim = value.trim()
let split = value.split(" ");
let lastword = value.substring(26,30)
let length = lastword.length

console.log("Trimmed value is", trim + " splitted value is ", split + " The lastword is ",lastword + " with length ", length)

