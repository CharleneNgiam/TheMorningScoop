
/* for splash page to disappear after a few seconds */
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
})


/* for the top news article to appear from api*/
$(document).ready(function(){
  let url = "news.json/topheadlines.json"
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
          
              <h3 class=news>${latestNews[i].title}</h3>
              <div class="card-image">
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
              </div> 
              <div class="link">
              <a href="${latestNews[i].url}">Read more</a>
              </div>
            </div>
          `;
      
        
      }

      if(output !== "" ){
        $("#newsResults")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults").html("Some error occured");

    }
  }) 


});




/* let url = "https://newsapi.org/v2/top-headlines?country=sg&apiKey=784219b208334c7a9c94e2d8ab4a2d20";


fetch(url)
  .then(response => response.json())
  .then(function(data){
    $("#newsResults").html("");
    $("#newsResults").html(data.articles[0].title+data.articles[0].urlToImage);

  }) */