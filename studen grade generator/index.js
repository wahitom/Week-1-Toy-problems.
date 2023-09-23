function inputMarks(num1){
    num1; 

    if(num1 > 79 && num1 <= 100){
        console.log("You have an A");
    }
    else if(num1 >= 60 && num1 <=79){
        console.log("You have a B");
    }
    else if(num1 < 49 && num1 >= 40){
        console.log("You have a C");
    }
    else if(num1 < 40 && num1 >= 0){
        console.log("You have an E");
    }
    else{
        alert("invalid input")
    }

    return num1;
}

console.log(inputMarks(101));