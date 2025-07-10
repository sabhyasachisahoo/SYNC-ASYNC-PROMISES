//✅ 1. Simulate a Food Delhivery

// Task: Create a function orderFood that returns a Promise. It should resolve after 2 seconds with "🍕 Pizza Delivered"

//Bonus: Add a chance to reject with "🚫 Delivery Failed"

function orderFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.5 ? res() : rej();
    }, 2000);
  });
}

orderFood()
  .then(function () {
    console.log("🍕 Pizza Delivered!");
  })
  .catch(function () {
    console.log("🚫 Delivery Failed!");
  });





// ✅ 2. Chained Promises: User -> Post -> Comments

// Task:
// 1. Create getUser() -> resolves with { id: 1, name: "Harsh"}
// 2. Create getPosts(userId) -> resolves with list of post titles
// 3. Create getComments(postId) -> resolves with comments
// Chain them together using .then() and log the final output.

function getUser() {
    return new Promise((res,rej) =>{
        res({id:1,name:"Raj"});
    })
}

function getPosts(userId) {
    return new Promise((res, rej) => {
        res(["Title 1", "Title 2", "Title 3"]);
    });
}


getUser().then(function(data){
    console.log(`data fetched: ${data.name}`);
    
})