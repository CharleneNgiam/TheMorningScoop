# TheMorningScoop
IP Project 

TheMorningScoop
A news website application that attract and encourage people to read more news, as well as educating users to differentiate
real and fake news. 
We have designed the whole application, incorporating appealing visuals, gamification concepts, to make it interesting and fun but
most importantly, exciting enough to attract more users to actively use the application. 


Design Process:
insights:
who this wesbite is for: general public
what it is that they want to achieve: read more news to know what's happening around the world as well as improving their english proficiency. Be well educated with differenciating real and fake news to prevent themselves from being deceived by fake news articles. Win prizes.

how your project is the best way to help them achieve these things: 
My project allows users to read news based on top headlines, as well as different categories that they are interested in. The website is designed to look fun yet professional to attract and encourage users to read more news. 
Users will also be able to learn what steps they should do when they read a news article. There will also be a quiz to test users on their knowledge on what they have learned about the steps. 
Users can also Win prizes by reading more news, do quiz to increase your experience points. 


User stories:
As a socializer, i want to interact with people via forum page, so that i can socialize with people.
As a Achiever, i want to get into leaderboard so that i can show people what i am good at, and be recognised by my effort. 
As a consumer, i want to gain experience points to get into the leaderboard so that i can win prizes.
As a self-seekers, i want to be on leaderboard for the self-satifaction of being one of the top few users.


XD wireframe link : https://xd.adobe.com/view/b1cfae93-e7ca-49c8-8d2c-37d0cc488ace-e49c/

Existing Features:

nav bar - in every page for you to navigate, simply click on the page you want to go and it will lead you to the page.

Forum page - click on mascot to enter forum page, right at bottom left there is a back button where it will bring you back to index.html.

Home page - you will be able to read the top news headlines, with the title, image and the url under the read more button. Clicking on the read more button will bring you to the article for you to read the news.

News page - all news article is differenciate into 7 categories. you can scroll down to look for articles you are interested, or simply click on the name of the category you are interested in and it will lead you the to all articles that are related to the category. It has the same format as home page, click read more to lead to the actual article.

Fake news page - this page is to teach you what to do when you read a news, so that you can identify what news are real and fake. DO remember the details as there is a quiz in games page that will be testing you on the steps.

Games page - the top part of the page consist of the leaderboard, get yourself up there to win amazing prizes. The leaderboard consist of the top 10 users with the most experience points. 
Below part of the page is the quiz, where you can do the quiz that is based off what you learned from the fake news page. The bottom of the quiz will show which question you are at. Whenever you click a correct answer, the background of what you click will turn green, if not it will turn red. At the end of the quiz, you will get your scoring, you can click check answers to check what you did right and wrong. If not, you can just click back to quiz which will bring you back to the start of the quiz.

Login page - there is register and login for you to choose, if you have already created a account simply click login and fill in your email and password (you can choose to remember password if you want) to login. If not, choose register to sign up for an account. When you sucessfully login, it will show a pop-up message informing you that you have successfully login. 

Profile page - this page will show your profile, the amount of articles you read, number of quiz attempted, and your experience points. Moving downwards, it will show the rewards you can possibly win if you are in the top 10 leaderboard. You can interact with the rewards by using yr cursor to turn them, if not it will turn by itself.


Features Left to Implement:

- login validation (if never fill up have error message), right now when you login it will only tell you login sucessfully. 
- login api (account system)
- like button under each article 

Another feature idea:
- create a random word to test user's vocabulary 

Technologies Used:
1. html 
- https://developer.mozilla.org/en-US/docs/Web/HTML
- the project uses html for the context and information of the website 
2. css
- https://developer.mozilla.org/en-US/docs/Web/CSS
- the project uses css for the design of the website 
3. javascript 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- the project uses javascript for the interaction and animation of website 
4. jquery 
- https://jquery.com/
- the project uses jquery to simplify ajax and event handling
5. json file 
- https://www.json.org/json-en.html
- the project uses json to save the data from the news api, we send request through postman and input the result back in json file 
6. model viewer
- https://modelviewer.dev/
- the project uses model viewer to implement 3d model into the website
7.news api 
- https://newsapi.org/
- the project uses data from news api to input news articles to the website 
8. lottie 
- https://lottiefiles.com/
- the project uses lottie files for animation in the website. (splash page)

Testing:

Forum page:
(Thread html)
- Go to forum by clicking on the mascot (newspaper)
- I tried to make it interactive by allowing users to comment after clicking the threads, however the code only works on local host and not github. Hence I commented out the threadhtml code.
(forum html)
- we cannot comment out the code that links forum.html to thread.html. Hence we removed it to avoic confusion and error page.
you can add the code "<a href="/thread.html?${thread.id}">" under forum.html right under line 29. Close it with "</a>" right below line 40.

Login form:
- Go to "Login" page
- try to submit the form and a success message will pop up. 

News API:
- Go to either "home" page or "news" page, both page have usage of news api 
- we are not able to get the data directly from the link since the api have restrictions such as only allowing on localhost. Hence we got the data via postman and created json files and got the data from there instead. 


screen sizes: 
- Kindly view the website via desktop view. 
- In certain desktop, you may have to increase/decrease the zoom due to different screen sizes from each desktop. Pls check the demo video to see what the layout looks like. Thankyou. 


Credits
Content
the fake news step was taken from 
- https://blog.pearsoninternationalschools.com/how-to-teach-your-students-to-recognise-fake-news/
Media
1. back button image - https://www.onlinewebfonts.com/icon/72513
2. logo image - designed by us
3. mascot image - designed by us
4. profile image - https://www.vecteezy.com/vector-art/2318271-user-profile-icon
5. trophy number 1 image - https://www.clipartmax.com/middle/m2i8G6Z5A0N4K9A0_trophy-clipart-number-1-pencil-and-in-color-trophy-trophy-icon-png/
6. trophy number 2 image - https://www.alamy.com/trophy-cup-icon-illustration-silver-2nd-place-image352209363.html
7. trophy number 3 image - https://www.123rf.com/photo_91752690_stock-vector-trophy-cup-icon-illustration-bronze-3rd-place-.html 
8. cotton on gift card image - https://auspost.com.au/shop/product/cotton-on-gift-card-cotton-gc
9. starbucks gift card image - http://www.2wo.com.sg/Gift-Cards-398411/Starbucks-Gift-Card.shtm
10. lazada gift card image - https://www.pinterest.com/pin/642255596856753055/
Acknowledgements
I received inspiration for this project from 


link to github: 
website:
https://charlenengiam.github.io/TheMorningScoop/
code:
https://github.com/CharleneNgiam/TheMorningScoop