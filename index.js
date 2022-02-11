/* for splash page to disappear after a few seconds */
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
})


/* for the top news article to appear from api*/
$(document).ready(function(){

  let url = "https://newsapi.org/v2/top-headlines?country=sg&apiKey=784219b208334c7a9c94e2d8ab4a2d20";

  $.ajax({
    url:url,
    method:"GET",
    dataType:"Json",

    success: function(news){
      let output = "";
      let latestNews = news.articles;

      for(var i in latestNews){
        output +=`
          <div class="col 13 m6 s12">
            <h3>${latestNews[i].title}</h3>
          </div>
        `;
      }

      if(output !== ""){
        $("#newsResults").html(output);
      }

    },
    error: function(){

    }
  })


});


