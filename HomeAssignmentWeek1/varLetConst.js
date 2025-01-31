const browserVersion ="Chrome";

function getBrowserVersion(){

    if(browserVersion.startsWith("Chrome")){
        let browserVersion= "Edge"

        console.log("Inside the function", browserVersion)

    }
    else {
        let browserVersion= "Safari"
        console.log("Inside the else function", browserVersion)
    }


}
getBrowserVersion()
console.log("The outside scope", browserVersion)




