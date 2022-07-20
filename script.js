// initializing equal button to 0
let equalPressed = 0;
// declaring the variables 
let clear = document.querySelector("#clear");
let erase = document.querySelector("#erase");
let equal = document.querySelector("#equal");
let input = document.querySelector("#screen");
let btnInput = document.querySelectorAll(".cal-btn");

// initialize input value to null
window.onload = ()=>{
    input.value="";
}
// adding logic for equal-to button
equal.addEventListener('click', ()=>{
    equalPressed=1;
    // input value displayed on screen
    let inputValue = input.value;
    try{
        // evaluation the inputValue on screen
        let outcome = eval(inputValue);

        if(Number.isInteger(outcome)){
            input.value = outcome;
        }else{
            input.value = outcome.toFixed(2);
        }
    }catch(e){
        // if invalid input entred
        input.value="error";

    }
})
// displaying button value on screen
btnInput.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(equalPressed==1){
            input.value="";
            equalPressed=0;
            }
        input.value += item.value;
    })
// backspacing the value
    erase.addEventListener('click', ()=>{
        input.value = input.value.substr(0, input.value.length -1);
    });
        
// clearing all values on screen
    clear.addEventListener('click', ()=>{
       input.value="";
    })

    
})
