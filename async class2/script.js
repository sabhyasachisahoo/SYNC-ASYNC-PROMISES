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
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 1, name: "Raj" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["Title 1", "Title 2", "Title 3"]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["Great post", "amazing content", "Loved it!"]);
    }, 1000);
  });
}

getUser()
  .then(function (data) {
    console.log(`data fetched: ${data.name}`);
    return getPosts(data.id);
  })
  .then(function (titles) {
    console.log(titles);
    return getComments(titles);
  })
  .then(function (comments) {
    console.log(comments);
  })
  .finally(function () {
    console.log("All operations completed.");
  });

// ✅ 3. Fake API Delay

// Task:
// Write a function fakeApiCall() that:
//  - Accepts a string like "users" or "posts"
//  - Resolves with some dummy data after a randomm delay (1-3 sec)

function fakeApiCall(endpoint) {
  const data = {
    users: ["Raj", "John", "Doe"],
    posts: ["hey buddy", "let's build this", "cool stuff"],
  }
  let delay = Math.random() * 2000 + 1000;
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log(data[endpoint])
    }, delay);
  });
}

fakeApiCall("users").then(function(data){
  console.log(data);
})
fakeApiCall("posts").then(function(data){
  console.log(data);
})
