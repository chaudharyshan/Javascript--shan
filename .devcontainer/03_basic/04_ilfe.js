//IIFE (Immediately Invoked Function Expression)
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE


(function chai(params) {
    console.log(`DB CONNECTED`);
    
}) ();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('shan'); 

