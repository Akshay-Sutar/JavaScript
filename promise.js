var timeoutPromise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            return resolve([1, 2, 3]);
        }, 2000);
    } catch (err) {
        return reject(err);
    }
});

timeoutPromise() 
.then(data => {
    // Perform logic here 
    console.log(1, data);

    return timeoutPromise;
})
.then(data => {
    // Perform logic here 
    console.log(2, data);
})
.catch(err => console.error(err));

Promise 1. Pending



