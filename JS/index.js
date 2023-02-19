
var signUpNameInput = document.getElementById('signUpNameInput');
var signupEmailInput = document.getElementById('signupEmailInput');
var signupPasswordInput = document.getElementById('signupPasswordInput');
var loginEmailInput = document.getElementById('loginEmailInput');
var loginPasswordInput = document.getElementById('loginPasswordInput');
var loginMessage = document.getElementById('loginMessage');
var loginButton = document.getElementById('loginButton');
var signupButton = document.getElementById('signupButton');
var signUpMessage = document.getElementById('signUpMessage');
var homeParagraph = document.getElementById('homeParagraph');

var Users = [];
if(localStorage.getItem('users')!=null)
{
    Users = JSON.parse(localStorage.getItem('users'));
}

// signUP
function signUp(){
    var user={
        name:signUpNameInput.value,
        email:signupEmailInput.value,
        password: signupPasswordInput.value
    }
    
    if(signUpNameInput.value=="" || signupEmailInput.value=="" || signupPasswordInput.value=='')
    {
        signUpMessage.innerHTML = 'all inputs are required';
    }
    
    else if (emaiIsExist()==true)
    {
        signUpMessage.innerHTML = 'email already exists';
    }
    else
    {
        Users.push(user);
        localStorage.setItem('users',JSON.stringify(Users));
        clearInputs();
        signUpMessage.innerHTML = 'success';
        signUpMessage.classList.replace('text-danger','text-success');
    }
}


function emaiIsExist(){
    for(var i =0 ; i<Users.length;i++)
    {
        if(signupEmailInput.value == Users[i].email)
        {
            return true;
        }

    }

    return false;
    
}

if(signupButton!= null)
{
    signupButton.addEventListener('click',signUp)
}


// Login

function login(){
    // input empty
    if(loginEmailInput.value=='' || loginPasswordInput.value=='')
    {
        loginMessage.innerHTML = 'all inputs are required'
    }
    // email or password wrong 
    else if (isOldUser() == false)
    {
        loginMessage.innerHTML = 'incorrect email or password'
    }
    else
    {
        loginButton.href = 'home.html'
    }

    // emai && pass correct
}


function isOldUser(){
    for(let i =0 ; i< Users.length;i++)
    {
        if(loginEmailInput.value == Users[i].email && loginPasswordInput.value== Users[i].password)
        {   
            localStorage.setItem("name", JSON.stringify(Users[i].name));
            return true;
        }
    }
    return false
}


if(loginButton != null)
{
    loginButton.addEventListener('click' , login)
}


// home page
function addname()
{
    var Name = JSON.parse(localStorage.getItem("name"));
    homeParagraph.innerHTML = `Welcome ${Name}`;
}

function clearInputs() 
{
    signUpNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
}


