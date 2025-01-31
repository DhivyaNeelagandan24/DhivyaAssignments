// //FunctionDeclaration

function userProfile(name){

    console.log(`Hello ${name}!`)
}
userProfile("Dhivya")

//ArrowFunction

let double = (number) => {
   
  let numberDouble = number * 2
    console.log("The number is:" , number + " Doubled the number value is: ", numberDouble);
}
double(5)


//AnonymousFunction
setTimeout(() =>  {
   console.log("This message is delayed by 2 seconds");
}, 2000);


//CallBackFunction
function getUserData(call) {
    console.log("We are fetching your data...")
    call();
}

function InsideFun(){
    setTimeout(() => {
        console.log("The Name of the user is Dhivya");
        console.log("The age of the user is 26");   
    }, 3000);
}

getUserData(InsideFun);





