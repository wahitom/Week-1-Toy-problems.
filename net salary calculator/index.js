
//salary = deductions + taxable income 
//taxable income = salary - deductions

let persRelief = 2400; //personal relief

let salary = 120000; // salary input

let result = totalSal(salary); //calculate your input and gives 


function totalSal(){
    let grossSal = salary; //gross income

    //nhif deductisons

    function deductionsNhif(salary) {
        let nhifDeduction = 0;
    
        if (salary <= 5999) {
            nhifDeduction = 150;
        } 
        else if (salary >= 6000 && salary <= 7999) {
            nhifDeduction = 300;
        } 
        else if (salary >= 8000 && salary <= 11999) {
            nhifDeduction = 400;
        } 
        else if (salary >= 12000 && salary <= 14999) {
            nhifDeduction = 500;
        } 
        else if (salary >= 15000 && salary <= 19999) {
            nhifDeduction = 600;
        } 
        else if (salary >= 20000 && salary <= 24999) {
            nhifDeduction = 750;
        } 
        else if (salary >= 25000 && salary <= 29999) {
            nhifDeduction = 850;
        } 
        else if (salary >= 30000 && salary <= 34999) {
            nhifDeduction = 900;
        } 
        else if (salary >= 35000 && salary <= 39999) {
            nhifDeduction = 950;
        } 
        else if (salary >= 40000 && salary <= 44999) {
            nhifDeduction = 1000;
        } 
        else if (salary >= 45000 && salary <= 49999) {
            nhifDeduction = 1100;
        } 
        else if (salary >= 50000 && salary <= 59999) {
            nhifDeduction = 1200;
        } 
        else if (salary >= 60000 && salary <= 69999) {
            nhifDeduction = 1300;
        } 
        else if (salary >= 70000 && salary <= 79999) {
            nhifDeduction = 1400;
        } 
        else if (salary >= 80000 && salary <= 89999) {
            nhifDeduction = 1500;
        } 
        else if (salary >= 90000 && salary <= 99999) {
            nhifDeduction = 1600;
        } 
        else if (salary >= 10000) {
            nhifDeduction = 1700;
        }
    
        return nhifDeduction;
    
    }

    //Remaining salary after nhif deduction
    let remSalary = salary - (persRelief + deductionsNhif(salary));
    //console.log(remSalary)
    
    //nssf deductions
    function deductionsNssf(){
    
         return nssfDeduction = salary * 0.06; 
        
    }
    //console.log(deductionsNssf())

    //remaining total salary

    let netSalary = remSalary - deductionsNssf(salary);
    //console.log(netSalary)

    //calculate payee
    function calcPayee(netSal){
        netSal = netSalary;
        //console.log(netSal);
    
        if(netSal <= 24000){
            return (netSal * 0.10);
        }
        else if(netSal >= 24001 && netSal <= 32333){
            return  (netSal * 0.25);
        }
        else if(netSal >= 32334 && netSal <= 500000){
            return  (netSal * 0.30);
        }
        else if(netSal >= 500001 && netSal <= 800000){
            return (netSal * 0.325);
        }
        else if(netSal >= 800001){
            return (netSal * 0.35);
        }
    } 

    let payee = calcPayee(netSalary);
    let salPayee = netSalary - calcPayee(netSalary);
    

    //return everything together object

    let returnEverything = {
        netSalary: netSalary,
        payee : payee,
        netSalaryPostPayee : salPayee,
        grossSalary: grossSal,
        nhifDeduction: deductionsNhif(salary),
        nssfDeduction : deductionsNssf(salary),   
    }
    return returnEverything;

}


console.log(result)


