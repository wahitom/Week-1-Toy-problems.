# Challenge 1: Student Grade Generator (Toy Problem)

## Challenge Goals

* Write a function that prompts the user to input student marks 
* Make it so that the input is between 0 and 100
* The output the user gets should correspond with the correct grade shown below
        ** A > 79 
        ** B 60 to 79
        ** D 49 to 59
        ** E > 40 

## How to complete this challenge 

# Create a function 

The first step is to create a function which will hold the statements required to carry out the project. In this step name the function appropriately then add a parameter which will represent the grade input.

# In the function 

in the function start an if else statement and put the conditions for the A requirements which will look like this **<if(num1 > 79 && num1 <= 100){console.log("You have an A");}>** which states that for the input between 79-100 the output should be an A. This is done for all the subsequent values using **else if(){}**

# Invoke the function 

Lastly the function is invoked in the console log and the marks input is put in between the brackets


# Challenge 2: Speed Detector (Toy Problem);

## Challenge Goals 

* Write a program that takes the speed of a car as input
* if the input is less than 70 then print "Ok"
* For every 5km/s above the speed limit ie 70 it should give the driver one demerit 
* If the driver gets more than 12 demerit points the function should print "License suspended"

# Create a function 

Create a function that will calculate the speed input and put a parameter. Create a variable for the speed limit, another for the difference between the speed limit and the speed input if the speed input is above speed limit, and lastly one that calculates the demerit points.

# Use an if else statement 

Next an if statement will be used to check if the user is below the speed limit and what to expect at every level. On the last section of the if else statemen the "License suspended" message should be included.

# Invoke the function 

Lastly the function is invoked in the console log and the speed input is put in between the brackets

# Challenge 3: Net Salary Calculator (Toy Problem)

## Challenge Goals

* Write a program whose major task is to calculate an individual's Net salary
* The program gets the inputs of basic salary and benefits
* It then calculates the payee, NHIF Deductions, NSSF Deductions, gross salary and net salary 

# Create a variable for the salary 

First create a variable for the salary which will be used to calculate several things in the program 

# Create a function to calculate the net salary, payee, Nhif and Nssf deductions

The function named totalSal() begins by calculating nhif deductions using an if else statement inside a deductionsnhif() function , then it calculates the remaining salary. The nssf deduction and the payee are calculated throught the same methods 

Remaining salary is calculated by subtracting the deductions and the payee from the gross salary to provide the net salary. Input a salary to test