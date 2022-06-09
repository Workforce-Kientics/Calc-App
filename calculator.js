
 function calcSalary() {
     var annualSal= parseFloat(document.getElementById('annwage').value);
     var hours=parseFloat(document.getElementById('txt_hours').value);
     var monSal= parseFloat(document.getElementById('monwage').value);
     var fortSal=parseFloat(document.getElementById('fwage').value);
     var wkSal=parseFloat(document.getElementById('wkwage').value);
     var daySal=parseFloat(document.getElementById('dwage').value);
     var hourSal=parseFloat(document.getElementById('hourwage').value);
     var calculate= 0

     if( annualSal== 0 && monSal==0 && fortSal==0 && wkSal==0 && daySal==0 && hourSal!=0) {
         calculate= hourSal * hours;
     }
     if( annualSal==0 && monSal==0 && fortSal==0 && wkSal==0 && daySal!=0 && hourSal==0){
         calculate= daySal * hours;
     }
     if( annualSal==0 && monSal==0 && fortSal==0 && wkSal !=0 && daySal==0 && hourSal==0){
         calculate= wkSal * hours;
     }
     if(annualSal==0 && monSal==0 && fortSal!=0 && wkSal==0 && daySal==0 && hourSal==0 ){
         calculate= fortSal * hours;
     }
     if(annualSal==0 && monSal!=0 && fortSal==0 && wkSal==0 && daySal==0 && hourSal==0){
         calculate= monSal * hours;
     }
     if(annualSal!=0 && monSal==0 && fortSal==0 && wkSal==0 && daySal==0 && hourSal==0){
        var calculate= annualSal * hours * 52;
     
     
     
     }
     document.getElementById('results').innerHTML= calculate;
 }

 


