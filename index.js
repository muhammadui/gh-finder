const API_URL = 'https://api.github.com/users/'
// const form = document.getElementById('form')
// const search = document.getElementById('search')
getUserInfo("muhammadui")

function getUserInfo (username) {
    // using axios to get the user information
    axios(API_URL + username)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
