console.log("hey 1");//synchronous
setTimeout(function(){  //asynchronous
    console.log("hey 2");
})
console.log("hey 3"); //synchronous

//sync -> call stack -> main thread execution
//async -> web api -> callback queue -> event loop(waits till call stack empty) -> call stack -> main thread execution

// ---------------------------------------


//Callback function

function getDetails(username,cb){
    setTimeout(function(){
        console.log("Sending the request to instagram...");
    },1000)
    setTimeout(function(){
        console.log("Fetching data...");
    },3000)
    setTimeout(function(){
        cb()
    },4000)
}

getDetails("john",function(){
    console.log("✅Data received for john");
    
})



// Ex:
function stepOne(cb){
    console.log("step 1");
    cb();
}
function stepTwo(cb){
    console.log("step 2");
    cb();
}
function stepThree(cb){
    console.log("step 3");
    cb();
}

stepOne(() => {        //this is Callback Hell
    stepTwo(() => {
        stepThree(() => {
            console.log("All steps completed");
        });
    });
})



//Promises

const pr = new Promise((resolve,reject) => {
    console.log("Promise started");
    console.log("Doing some work...");
    console.log("Work done");
    resolve() //write resolve() if work is done successfully and write reject() if there is an error
})

pr.then(function(){
    console.log("Promise resolved");
}).catch(function(){
    console.log("Promise rejected");
})



// Trying to solve the callback hell problem with promises

function stepOne(){
    return new Promise(function(res,rej){
        console.log("step 1");
        res();
    })
}
function stepTwo(){
    return new Promise(function(res,rej){
        console.log("step 2");
        res();
    })
}
function stepThree(){
    return new Promise(function(res,rej){
        console.log("step 3");
        res();
    })
}
stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(function(){
        console.log("All steps completed");
    })