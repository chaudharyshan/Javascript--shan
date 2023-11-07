const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const nav = document.querySelector('.nav')

console.log(nav);

// console.log(buttons);

buttons.forEach( function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);

        switch (e) {
            case 1 : 
            body.style.backgroundColor = e.target.id;
            
           
            break;
        
            default:
                body.style.backgroundColor = e.target.id;
                break;
        }

        if(e.target.id === 'grey'){
            nav.style.backgroundColor = "#E4E4E4"
        }
        if(e.target.id === 'white'){
            nav.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            nav.style.backgroundColor = "lightblue"
        }
        if(e.target.id === 'yellow'){
            nav.style.backgroundColor = "#FFFFC2"
        }
    })
})