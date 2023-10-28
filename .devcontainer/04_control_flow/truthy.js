const userEmail = "Shan@ai"

if (userEmail) {

    console.log("Got email");
    
} else {

    console.log("Don't have emial");
}

// falsy values 

// false, 0, -0, BigInt 0n, null, NaN, undifined

// truthy values 

// "0", 'false', " ", [], {}, function(){}

const empObj = {}

if (Object.keys(empObj).length === 0) {

    console.log("obj is empty");
    
}