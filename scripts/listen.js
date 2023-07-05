let token = localStorage.getItem('access_token');

async function getProfile(accessToken) {
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).then((response)=>{
        if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
        }
        return response.json();
    }).then((json)=>{
        username = json.display_name;
        imgSrc = json.images[0].url;
        greeting.innerHTML = "Welcome " + username + "!";
        profilePicture.src = imgSrc;
    }).catch(error => {
        console.error('Error: ', error);
    });
}

window.onload = function () {
    let greeting = document.getElementById('greeting');
    let profilePicture = document.getElementById('profilePicture')
    getProfile(token);
};