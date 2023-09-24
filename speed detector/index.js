

//function that calculates the speed and demerits


function calculateSpeed(num1){  //input our speed here in num1
    //const prompt1 = prompt("Enter the car's speed (in km/h):")

    const speedLimit = 70;      
    const overSpeed = num1 - speedLimit //difference between speed and speedLimit
    let demerit = Math.round(overSpeed/5) //calculate the demerit by dividing the overspeed by 5

    if(num1 < speedLimit){ //if number is below speed limit
        console.log("Ok")
    }
    else if(num1 > speedLimit && num1 <= 130){ //if number is above speed limit but still below 130
        //demerit = (overSpeed/5);
        console.log(`You have ${demerit} demerit points`)
    }
    else if(num1 > 130){ //if number is above 130 
        console.log("License Suspended ")
    }

    return num1;
}

console.log(calculateSpeed(131))






