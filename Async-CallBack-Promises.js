//Asyncronous.javascript

// console.log('hello');

// setTimeout(function() {

//     console.log('I am setTimeOut')


// },3000);

// console.log('javascript');




// ex:2

// console.log('hello');
// function greeting() {


//     console.log('I am setTimeOut')


// }

// setTimeout(greeting,3000);
// console.log('javascript');

    

//ex:3

// console.log('start')

// setTimeout(() => {

//     console.log('I am from timout')

// }, 0)

// console.log('end')


//callBacks

// register
// send welcome Email
// login
// get user data
// display data




// function register(callback) {
//     setTimeout(() => {

//        console.log('Register end');
//        callback();


//     },1000);

    
// }
// function sendmail(callback) {
//     setTimeout(() => {

//         console.log('Email end');
//         callback();


//     },2000);


    
// }
// function login(callback) {
//     setTimeout(() => {

//         console.log('Login end');
//         callback();


//     },1000);


    
// }
// function getuserdata(callback) {
//     setTimeout(() => {

//         console.log('Got user data');
//         callback();


//     },1000);


    
// }
// function displayuserdata(callback) {
//     setTimeout(() => {

//         console.log('Display user data');
//         callback();


//     },1000);


    
// }


// //callback.hell
// register(function() {
//     sendmail(function() {
//         login(function() {
//             getuserdata(function() {
//                 displayuserdata();
//             });
            
//         });
//     });
        
// });


// console.log('other app');





// Promise


function register() {
    return new Promise((resolve,reject) => {

        setTimeout(() => {

            console.log('Register end');
            resolve();
     
         },1000);

    });
    

    
}
function sendmail() {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {

            console.log('Email end');
            resolve();
    
    
        },2000);


    });
    


    
}
function login() {
    return new Promise((resolve,reject)=> {

        setTimeout(() => {

            console.log('Login end');
            resolve();
    
    
        },1000);
    


    });
    

    
}
function getuserdata() {
    return new Promise((resolve,reject)=> {

        setTimeout(() => {

            console.log('Get user data');
            resolve();
    
    
        },1000);


    });
    


    
}
function displayuserdata() {
    return new Promise((resolve,reject)=> {

        setTimeout(() => {

            console.log('Display user data');
            resolve();
    
    
        },1000);


    });
   


    
}


register().then(sendmail).then(login).then(getuserdata).then(displayuserdata);


console.log('other app');