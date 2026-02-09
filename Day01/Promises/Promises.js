const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Something went wrong!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));


function waitFor2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 seconds done");
        }, 2000);
    });
}

waitFor2Seconds().then(msg => console.log(msg));



function step1() {
    return Promise.resolve("Step 1 done");
}

function step2() {
    return Promise.resolve("Step 2 done");
}

function step3() {
    return Promise.resolve("Step 3 done");
}

step1()
    .then(msg => {
        console.log(msg);
        return step2();
    })
    .then(msg => {
        console.log(msg);
        return step3();
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



const p1 = Promise.resolve("One");
const p2 = new Promise(res => setTimeout(() => res("Two"), 1000));
const p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // ["One", "Two", "Three"]
});



function getData(callback) {
    setTimeout(() => callback("Data received"), 1000);
}

// Convert to promise
function getDataPromise() {
    return new Promise((resolve) => {
        getData((data) => resolve(data));
    });
}

getDataPromise().then(res => console.log(res));
