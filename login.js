/* for splash page to disappear after a few seconds */
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
})

/* for login page and register form to move*/

var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

function Register()
{
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";

}
function Login()
{
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";

}


/* for the pop-up message telling user they sucessfully enter */
function myFunction(){
  alert("Login successfully!");
}

/* for users to go back to home page when they click submit button in login */
$('.submit-btn').click(function() {
    window.location.href = 'index.html';
    return false;
}); 

