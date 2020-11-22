//-- Async. example --//
console.log("--- Asynchronous ------");
function asynchronous(){
    console.log("1");
    setTimeout(() => { console.log("2"); }, 2000);
    console.log("3");
}
asynchronous(); // (Output -> 1 3 2) 



//-- Sync. example --//
console.log("--- Synchronous ------");
function resolveAfter2Seconds(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2');
        }, 2000);
    });
}

async function asyncCall(){
    console.log('1');
    console.log(await resolveAfter2Seconds());
    console.log('3');
}

asyncCall(); //(Output -> 1 2 3)