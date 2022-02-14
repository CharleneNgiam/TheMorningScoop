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

/* for when you click out of login or register form, form box disappear */
var modal = document.getElementsByClassName("submit-btn");
window.onclick = function(event)
{
    if (event.target == modal)
    {
        href = "index.html"
    }
}

/* document.getElementsByClassName("submitBtn").addEventListener("click", myFunction);
      function myFunction() {
        window.location.href="index.html";
      } */




/* $(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "61d3e334ccd0211b320896a5";
  getContacts();
  $("#update-contact-container").hide();
  $("#add-update-msg").hide();

  //[STEP 1]: Create our submit form listener
  $("#contact-submit").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let contactName = $("#contact-name").val();
    let contactstid = $("#contact-stid").val();
    let contactstm = $("#contact-stm").val();
    let contactclass = $("#contact-class").val();
    let contactemail = $("#contact-email").val();
    let contactage = $("#contact-age").val();


    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "name": contactName,
      "studentid": contactstid,
      "studentmentor": contactstm,
      "studentclass": contactclass,
      "studentemail": contactemail,
      "studentage": contactage,
    };

    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://iddata-4d53.restdb.io/rest/contact",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop( "disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      }
    }

    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#contact-submit").prop( "disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);

      //update our table 
      getContacts();
    });
  });//end click 
 */