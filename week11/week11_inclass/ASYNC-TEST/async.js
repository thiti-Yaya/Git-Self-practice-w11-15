//sync - async
//syncohronous programming
// console.log("strting...")
// console.log("working#1...")
// console.log("ending...")
// //asynchronous
// console.log("strting...")
// setTimeout(() => console.log("working#2..."),5000)
// //setTimeout asynchronous function
// console.log("ending...")

// //ตัวอย่างการไม่จัดการบ promise ที่จะสร้างปัญหาให้กับโปรแกรม
// function doSomething(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => (hasResouce ? resolve("done") : reject("fail"), 5000))
//     })
// }
 //not handle promise
// console.log('starting...')
// const workStatus = doSomething(false)
// console.log(workStatus)
// console.log("ending...");
//starting...
// Promise { <pending> }
// ending...
//fail, throw exception



// console.log('starting...')
// const workStatus = doSomething(true)
// console.log(workStatus)
// console.log("ending...")
// //handle promise -2 ways (1) .then().catch(), (2) async-await
// //1) .then()catch()
// console.log('starting...')

// doSomething(true)
//     .then((result)=>{
//         console.log("working...")
//         console.log(`work Status= ${result}`)
//         console.log("ending...")     
//     })
//     .catch((error) =>{
//         console.log(error)
//     })

// doSomething(false)
//     .then((result)=>{
//         console.log("working...")
//         console.log(`work Status= ${result}`)
//         console.log("ending...")     
//     })
//     .catch((error) =>{
//         console.log(error)
//     })

//2. async-await
// async function working2() {
//     try {
//          console.log(`starting...`)
//     const workStatus = await doSomething(ture)
//     console.log(workStatus)
//     console.log("ending...")
//     } catch (error) {
//         console.log(error)
//     }
// }

// working2


async function working2() {
    try {
         console.log(`starting...`)
    const workStatus = await doSomething(false)
    console.log(workStatus)
    console.log("ending...")
    } catch (error) {
        console.log(error)
    }
}
working2


