const API_URL = 'https://api.github.com/users/'
// const form = document.getElementById('form')
// const search = document.getElementById('search')
getUserInfo("bradtraversy")

function getUserInfo (username) {
    // using axios to get the user information
    axios(API_URL + username)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}




// Service Worker Zone
// service worker registration.
//don't forget to copy this file to all your html pages

// step 1 -
// Check if the browser support service worker because not all browsers support it

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) =>
        console.log("service worker is registered successfully", reg)
      )
      .catch((err) => console.log("service worker is not registered", err));
    // this code wil register service worker for your app
  }
  
  // Step 2 -- The Install Event
  // This code is going to be done in the sw.js file
  