const button = document.getElementById("btn");

button.addEventListener('click', function(){

    const userInput = prompt("Please enter your Marks");

    if(userInput === null || userInput === NaN){
        alert("Invalid input")
    }
    else if(userInput > 79 && userInput <= 100){
        alert("You have an A");
    }
    else if(userInput >= 60 && userInput <=79){
        alert("You have a B");
    }
    else if(userInput >= 49 && userInput <= 59){
        alert("You have a C");
    }
    else if(userInput >= 40 && userInput <= 49){
        alert("You have a D")
    }
    else if(userInput < 40 && userInput >= 0){
        alert("You have an E");
    }
    else{
        alert("invalid input")
    }

})
