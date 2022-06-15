



var monSal= parseFloat(document.getElementById('monwage'));
var fortSal=parseFloat(document.getElementById('fwage'));
var wkSal=parseFloat(document.getElementById('wkwage'));
var daySal=parseFloat(document.getElementById('dwage'));
var hours=parseFloat(document.getElementById('txt_hours'));
var hourSal=parseFloat(document.getElementById('hourwage'));
var CalcButton= document.getElementById('calc');

CalcButton.addEventListener("click", annualSalary());


function annualSalary(){

    var hourlyRate= hourSal;
    var hours_worked= hours;
    var Salary= hourlyRate * hours_worked * 52;
    document.getElementById('results').innerHTML = Salary;
}
    

     
    
    
     

 


