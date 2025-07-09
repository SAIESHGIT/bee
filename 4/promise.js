let p= new Promise((resolve, reject) => {
resolve("wada pura kiya");



})
p.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});