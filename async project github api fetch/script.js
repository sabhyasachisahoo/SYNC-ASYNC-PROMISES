let searchBtn = document.querySelector(".search")
let usernameinp = document.querySelector(".usernameinp")
let card = document.querySelector(".card");

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) throw new Error("User not found");
    return raw.json();
  });
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((raw) => {
    if (!raw.ok) throw new Error("Repositories not found");
    return raw.json();
  });
}

function decorateProfileData(details){
    console.log(details);
    
    let data = `<img
    src="${details.avatar_url}"
    alt="avatar"
    class="w-20 h-20 rounded-full border-2 border-white"
  />

  <!-- Info -->
  <div class="space-y-2">
    <div>
      <h2 class="text-lg font-bold text-white">${details.name}</h2>
      <p class="text-sm text-gray-400">@${details.login}</p>
    </div>
    <p class="text-sm pb-3 text-gray-300">
      ${details.bio ? details.bio : "No bio available."}
    </p>

    <div class="text-sm mt-2 space-y-1 text-white">
      <p>
        <span class="font-semibold">Public Repos:</span> ${details.public_repos}
        <span class="font-semibold ml-4">Followers:</span> ${details.followers}
        <span class="font-semibold ml-4">Following:</span> ${details.following}
      </p>
      <p>
        <span class="font-semibold">Location:</span>
        <span class="text-white">${details.location ? details.location : "No location available."}</span>
        <span class="font-semibold ml-4">Company:</span>
        <span class="text-white">${details.company ? details.company : "N/A"}</span>
        <span class="font-semibold ml-4">Blog:</span>
        <a href="#" class="text-blue-400 hover:underline" target="_blank">${details.blog}</a>
      </p>
    </div>
  </div>`
    card.innerHTML = data;
}


searchBtn.addEventListener("click", function () {
  let username = usernameinp.value.trim();
  if(username.length > 0){
    getProfileData(username).then(data =>{
        decorateProfileData(data);
        
    })
  }else{
    alert()
  }
});
