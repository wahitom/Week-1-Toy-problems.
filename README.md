# Challenge 1: Student Grade Generator (Toy Problem)

## Challenge Goals

* Write a function that prompts the user to input student marks 
* Make it so that the input is between 0 and 100
* The output the user gets should correspond with the correct grade shown below
        ** A > 79 
        ** B 60 to 79
        ** C 49 to 59
        ** D 40 to 49
        ** E > 40 

## How to complete this challenge 

# Get button element from index.html

In this step you add a button in your index.html. After that getElementsById() can be used to get the button from your html and properties can be added to it

# Create a function 

The first step is to create a function which will hold the statements required to carry out the project. In this step the function is found inside the event listener added for the prompt. 

# In the function 

in the function start an if else statement and put the conditions for the A requirements which will look like this **<if(num1 > 79 && num1 <= 100){alert("You have an A");}>** which states that for the input between 79-100 the output should be an A. This is done for all the subsequent values using **else if(){}**. When the user inputs their marks it should then give an alert of their grade


# Challenge 2: Speed Detector (Toy Problem);

## Challenge Goals 

* Write a program that takes the speed of a car as input
* if the input is less than 70 then print "Ok"
* For every 5km/s above the speed limit ie 70 it should give the driver one demerit 
* If the driver gets more than 12 demerit points the function should print "License suspended"

# Get button element from index.html

In this step you add a button in your index.html. After that getElementsById() can be used to get the button from your html and properties can be added to it


# Use an if else statement 

Next an if statement will be used to check if the user is below the speed limit and what to expect at every level. On the last section of the if else statemen the "License suspended" message should be included.

Lastly with the button added one can press it for the prompt to input data and it will give an alert for the correct speed output 

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