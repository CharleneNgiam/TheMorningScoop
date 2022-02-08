/* for splash page to disappear after a few seconds */
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
})

/* for the top news article to appear from api*/
let url = "https://newsapi.org/v2/top-headlines?country=sg&apiKey=784219b208334c7a9c94e2d8ab4a2d20";

fetch(url)
  .then(response => response.json())
  .then(function(data){
    $("#article").html("");
    $("#article").html(data.articles[0].title.url);
  })