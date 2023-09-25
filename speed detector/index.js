
const button = document.getElementById("btn");

button.addEventListener('click', function(){
    const userInput = prompt("Please enter your Speed");

    const speedLimit = 70;      
    const overSpeed = userInput - speedLimit //difference between speed and speedLimit
    let demerit = Math.round(overSpeed/5) //calculate the demerit by dividing the overspeed by 5

    if(userInput < speedLimit){ //if number is below speed limit
        alert("Ok")
    }
    else if(userInput > speedLimit && userInput <= 130){ //if number is above speed limit but still below 130
        //demerit = (overSpeed/5);
        alert(`You have ${demerit} demerit points`)
    }
    else if(userInput > 130){ //if number is above 130 
        alert("License Suspended ")
    }

});





