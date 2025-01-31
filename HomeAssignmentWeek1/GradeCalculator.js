function getGrade(StudentScore){
   
    switch(true){
        case StudentScore > 81:
        console.log("The student grade is A");
        break;
        case (StudentScore >= 51 || StudentScore <= 80 ):
        console.log("The student grade is B");
        break;
        case (StudentScore <= 50):
            console.log("The student grade is C");
            break;
        default:
        console.log("Please enter the score")
        break;
        }
}
getGrade(60)