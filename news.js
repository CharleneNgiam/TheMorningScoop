/* for splash page to disappear after a few seconds */
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 2000);
})


/* for the business article to appear from api*/
$(document).ready(function(){
  let url = "news.json/business.json"
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

/* for the entertainments article to appear from api*/
$(document).ready(function(){
  let url = "news.json/entertainment.json"
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
        $("#newsResults2")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults2").html("Some error occured");

    }
  }) 


});

/* for the general article to appear from api*/
$(document).ready(function(){
  let url = "news.json/general.json"
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
        $("#newsResults3")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults3").html("Some error occured");

    }
  }) 


});

/* for the health article to appear from api*/
$(document).ready(function(){
  let url = "news.json/health.json"
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
        $("#newsResults4")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults4").html("Some error occured");

    }
  }) 


});

/* for the science article to appear from api*/
$(document).ready(function(){
  let url = "news.json/science.json"
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
        $("#newsResults5")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults5").html("Some error occured");

    }
  }) 


});


/* for the sports article to appear from api*/
$(document).ready(function(){
  let url = "news.json/sports.json"
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
        $("#newsResults6")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults6").html("Some error occured");

    }
  }) 


});

/* for the technology article to appear from api*/
$(document).ready(function(){
  let url = "news.json/technology.json"
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
        $("#newsResults7")
        .html(output)
        
      }

      

    },
    error: function(){
      $("#newsResults7").html("Some error occured");

    }
  }) 


});
