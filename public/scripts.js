// Configure Auth0
const auth0 = new auth0.WebAuth({
  domain: 'cdgames.us.auth0.com', // Replace with your Auth0 domain
  clientID: 'AHjuO0hConAEVBkZe6NEfPT7HeJ7EDJc',  // Replace with your Auth0 client ID
  redirectUri: 'https://codedealer123.github.io',
  responseType: 'token id_token',
  scope: 'openid profile email'
});

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userInfo = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const userPicture = document.getElementById('user-picture');

// Show user info if logged in
function updateUI(isLoggedIn, user) {
  if (isLoggedIn) {
    userInfo.style.display = 'block';
    logoutBtn.style.display = 'inline-block';
    loginBtn.style.display = 'none';
    userName.textContent = user.name;
    userPicture.src = user.picture;
  } else {
    userInfo.style.display = 'none';
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'inline-block';
  }
}

// Log in the user
loginBtn.addEventListener('click', () => {
  auth0.authorize();
});

// Parse URL hash and handle authentication
function handleAuthentication() {
  auth0.parseHash((err, authResult) => {
    if (authResult && authResult.idToken) {
      window.location.hash = '';
      auth0.client.userInfo(authResult.accessToken, (err, user) => {
        if (user) {
          sessionStorage.setItem('isLoggedIn', true);
          sessionStorage.setItem('user', JSON.stringify(user));
          updateUI(true, user);
        }
      });
    } else if (err) {
      console.error(err);
    }
  });
}

// Log out the user
logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('isLoggedIn');
  sessionStorage.removeItem('user');
  updateUI(false);
  auth0.logout({ returnTo: window.location.origin });
});

// Initialize app
window.onload = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const user = JSON.parse(sessionStorage.getItem('user'));
  updateUI(isLoggedIn, user);
  handleAuthentication();
};
