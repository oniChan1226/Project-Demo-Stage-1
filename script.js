// header
// Log in menu 
const loginBtn = document.getElementById('logInBtn');
const loginMenu = document.getElementById('logInMenu');
const logInArrow = document.getElementById('login-arrow');

loginBtn.addEventListener('click', toggleLogInMenu);

function toggleLogInMenu() {
    loginMenu.classList.toggle('hidden');
    logInArrow.classList.toggle('fa-fade');
}
// hamburger
const hamburgerIcon = document.getElementById('hamburger-icon');
const hamburgerContainer = document.getElementById('hamburger-cont');

hamburgerIcon.addEventListener('click', () => {
    if (hamburgerContainer.style.display === "none" || hamburgerContainer.style.display === "") {
        hamburgerContainer.style.display = "block";
    }
    else {
        hamburgerContainer.style.display = "none";
    }
});
// searchInput
const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
    }
    else {
        searchInput.style.display = "none";
    }
});

// hero-icon-btn
const heroBuildBtn = document.getElementById('hero-build-btn');
const heroBuildIcon = document.getElementById('hero-build-icon');

heroBuildBtn.addEventListener('mouseover', () => {
    heroBuildIcon.classList.add('fa-bounce');
});

heroBuildBtn.addEventListener('mouseout', () => {
    heroBuildIcon.classList.remove('fa-bounce');
});

// login
localStorage.setItem("Username", "ppp@example.com");
localStorage.setItem("Password", "ppp@123");


const logInNow = document.getElementById('logIn');

logInNow.addEventListener('click', () => {

    const userName = document.getElementById('username').value;
    const password = document.getElementById('userPassword').value;
    if (localStorage.getItem("Username") === userName && localStorage.getItem("Password") === password) {
        document.getElementById('logInAlert').innerHTML = "Loged In Successfully";
    }
    else {
        document.getElementById('logInAlert').innerHTML = "Invalid Username or Password";
    }
})

// animation
window.addEventListener('load', () => {
    const transXList = document.querySelectorAll(".transX");
    const transNegativeXList = document.querySelectorAll(".transNegativeX");

    // Iterate through each element in the NodeList
    transXList.forEach(transXElement => {
        transXElement.style.opacity = 1;
        transXElement.style.transform = "translateX(0px)";
    });
    
    transNegativeXList.forEach(transNegativeXElement => {
        transNegativeXElement.style.opacity = 1;
        transNegativeXElement.style.transform = "translateX(0px)";
    });
});
