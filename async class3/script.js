// function getUserInfo(){
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res({id:1,name:"Rajesh"})
//         }, 1000);
//     })
// }

// function getUserPics(id){
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res(["pic1","pic2"])
//         }, 1000);
//     })
// }

// getUserInfo().then(function(data){
//     console.log(data);
//     return getUserPics(data.id)
// }).then(function(data){
//     console.log(data);

// })




//fetch
//github api

document.querySelector("button").addEventListener("click", function () {
  fetch("https://api.github.com/users/sabhyasachisahoo")
    .then((raw) => raw.json())
    .then((data) => {
      console.log(data);
    });
});
