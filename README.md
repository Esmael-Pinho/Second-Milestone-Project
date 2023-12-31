
Milestone Project 2.

# ![Popping Logo](docs/assets/images/readme/Logo.png) 



![Image of  on different devices](docs/assets/images/readme/Im-Responsive.png)

## Live Project


[Click me for live link.](https://esmael-pinho.github.io/Second-Milestone-Project/)

## Repository

[Click me for the project repository.](https://github.com/Esmael-Pinho/Second-Milestone-Project)


# Table of Contents

## Contents
- [User Experience](#user-experience)
  * [User Stories](#user-stories)
    + [Users](#users)
    + [Business Owner](#business-owner)
  + [Future Features](#future-features)
- [Design](#design)
  + [Overview](#overview)
  + [Color Scheme](#color-scheme)
  + [Typography](#typography)
  + [Wireframes](#wireframes)
- [Features](#features)
  + [All Pages Features](#all-pages-features)
- [Technologies used](#technologies-used)
  + [Languages Used](#languages-used)
  + [Frameworks Libraries and Programs](#frameworks-libraries-and-programs)
- [Deployment](#deployment)
  + [How To Fork](#how-to-fork)
  + [How To Clone](#how-to-clone)
- [Testing](#testing)
  + [W3C Validator](#w3c-validator)
  + [Lighthouse](#lighthouse)
- [Future Features](#future-features)
- [Credits](#credits)
  + [Code](#code)
  + [Content](#content)

# User Experience

## User Stories

### Users
- As a player, I want the website to load quickly and provide a enjoyable experience.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Website Load | Player opens the website | The website loads quickly with no issues | ![Works as expected](docs/assets/images/readme/Home-page.png) |


- As a player, I want to be able to visualize the contents of - Demo - so i can understand and interact with the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Demo Button | Clicks demo button | Play button disappears, a video demonstration  shows with controls available  | [Works as expected](docs/assets/video/demo-video.mp4) |



- As a player, I want to have different levels to choose from and  be able to select which I want to play.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Level selected | Choose difficulty level | Game starts according to level selected | ![Works as expected](docs/assets/images/readme/Levels-game.png) |


- As a player, I want to be able to check my progress, the correct and incorrect answers ans score during the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game Page | Game start - Mid Game - End Game  | Clear progress indication throughout the game  | ![Works as expected](docs/assets/images/readme/Game-after-start.png) |


- As a player, I want to be able to easily navigate back to the home page after completing the quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game ended | Game quiz completion | A congratulation message, along with the player score a play again button and a home button | ![Works as expected](docs/assets/images/readme/End-game-page.png) |

### Business Owner

- I want to be able to receive feedback from players regarding any issues, or comments about the game.


## Future Features 

- Include a timer, increasing the game interactivity and hopefully excitement, with scoring based on their speed.

- I hope to implement a multiplayer scoreboard, along with players nicknames + pictures or icons.

-  Create a system of goals, where they may earn some sort of badges | inspiring messages or even a new item, icon they can use in game.


# Design

## Overview
The website consists of three pages home-page, level-page, game-page. The pages are structured in an easy-to-navigate with simple buttons indicating their function allowing visitors to quickly understand the game. The demo button provides a video showing a little demonstration of what the game is and how to play, the play button takes the player, to the levels page with three levels to choose from (easy, medium, hard), upon the player level selection, to the game.


## Color Scheme
![Bubbles](docs/assets/images/readme/Colors/milestone-project-2.png)

  * The website uses a palette of colors generated using the [Coolors]("https://coolors.co/") website. 
  It uses a simple color scheme of Persian-pink and rose , Cherry-blossom and Amethyst with pops of dark-blue and red, along with the primary color.


## Typography

 Google Fonts was used for the following fonts:
  * Bruno Ace Sc : was used for the logo.
  * Ubuntu: was used for the headings, paragraphs and small texts.
  * Sans-serif: used as the fallback font.

## Wireframes

[wireframes](docs/assets/images/readme/wireframe/Wireframe-Popping.png)


# Features

## All Pages Features

### Home-Page
 - This page shows an welcome message to the game, along with two button options: A Demo button and a Play button on a vibrant red. On the background, as an overlay it displays different bubbles from random colors.

 ![Home-Page](docs/assets/images/readme/Home-page.png)

 | **Demo-Page** | **Play Button** | **Logo** |
|----------------|-----------------|----------|
| The Demo button once clicked, hides the play button and adds a video demonstration of how to play the game as well as navigate the page. | The Play button once clicked will take the user to the Levels page | Takes the user to the home page when clicked |

### Levels-Page
 - This page requests the user to select a game difficulty level. Displaying a container with three buttons, easy, medium, hard, each representing a game level. The page also displays a home and a sound button, in case the player wants to return to the home-page, or simply toggle the sound off.

 ![Levels-Page](docs/assets/images/readme/Levels-game.png)

| **Home-btn** | **Sound-btn** | **Easy - Medium - Hard buttons**|
|--------------|---------------|---------------------------------|
| Takes the player back the the previews page(Home-Page). | Pause or play the sound | Takes the player to the next page (game page, according to the difficulty level chosen) |
 
 The levels page also contains a footer containing social links and a feedback button which will open a modal allowing the player to send me an email message.  

 | **Footer** | **Modal** |
 |------------|-----------|
 | ![Footer](docs/assets/images/readme/footer.png) | ![Modal](docs/assets/images/readme/modal.png) |


 ### Game-Page
  - This page also contains the logo, home-btn, sound-btn and footer, the same as levels-page, with the same functionalities. However, now provides a start btn which will start the game, displaying a scoreboard at the top, composed with a questions number indication, a correct and incorrect answers, and a score. Following those it displays the questions, choosing them at random.
  On the game-area the user it's presented with four buttons, four choices, choosing the right one will display a "correct" sound and a "incorrect" sound for thw wrong answer. incrementing the question indices as well as the score...

| **Start-btn** | **Options-btns** | **Correct and Incorrect answers**|
|---------------|-------------------|--------------------------------------|
| Upon clicking the btn a loading git is displayed to show interactivity, then displays scoreboard along with questions and the options-btn | Each as four different choices, being them 4. clicking on the right on will increment the question number as well as correctAnswers | Depending on the choice it will activate a different sound conformed   |

Before game start:
  ![Game-Page](docs/assets/images/readme/Game-before-start.png)

After game start:
  ![Game-Page](docs/assets/images/readme/Game-after-start.png)


  ### Game-End-Page
  - This page shows a congratulations message to the user along the the total score, and asks for a feedback.

  ![Game-End-Page](docs/assets/images/readme/End-game-page.png)


  ### 404-Page
  - This page shows Error 404 in case there's been some error pulling the questions. And asks the user to go back to the home-page by clicking the button in order to try again.

  ![404-Page](docs/assets/images/readme/Page-404.png)


# Known Bugs
The only bugs detected were css ones, as there were some contents overflowing, but those were handled on the moment.

# Technologies Used

## Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/CSS)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


## Frameworks Libraries and Programs
- [Google Fonts](https://fonts.google.com/)
  - Two fonts are imported from google fonts.
  
- [Font awesome](https://fontawesome.com/icons)
  - I used icons from font awesome on buttons.

- [Git](https://git-scm.com/)
  - Git was used as a version control in the terminal.

- [Github](https://github.com/)
  - Github was used to create and store the project repository.

- [Gitpod](https://gitpod.io/)
  - Gitpod was used to create my files and where I wrote the code.

- [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
  - Google Chrome's Dev Tools were used while building the project to test responsiveness and for debugging.

- [Am I Responsive?](http://ami.responsivedesign.is/) 
  - To show the website image on a range of devices.

- [Lucid](https://lucid.co/)
  - Figma was used to help create the initial idea for the project.

- [Image Resizer](https://imageresizer.com/)
  - Image Resizer was used to resize the images, as well as change it's format.

- [TinyPNG](https://tinypng.com/)
  - TinyPNG was used to compress images, making it smaller to help with loading speed.

- [Coolors](https://coolors.co/)
  - Coolors was used to help generate the color palettes used on the project.

- [Pexels](https://www.pexels.com/)
  - Pexels was used to obtain images used on the project.

- [tenor](https://tenor.com/)
  - tenor was used to obtain the gif used on the project.

- [FreeConverter](https://www.freeconvert.com/mp3-converter)
  - FreeConverter was used to convert the sound used on the project to mp3.

- [Microsoft Bing](https://allears.net/)
  - Microsoft Bing was used to obtain some images used on the project.

 - This were the programs i used for testing:

- [WC3 Validator](https://validator.w3.org/) - HTML and CSS files

- [JSHint](https://jshint.com/) - JavaScript files

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - To test the web page, performance, accessibility, best practices and SEO.



# Deployment
Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, [Bubbles](https://github.com/Esmael-Pinho/Second-Milestone-Project).
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select docs/ from the drop down select folder menu.
6. Click Save. The live website site is now deployed at the URL showed at the top by Github pages.

#### How to Fork

Forks are used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea. By forking the GitHub Repository you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository.
To fork the Popping repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Bubbles](https://github.com/Esmael-Pinho/Second-Milestone-Project).
3. Click the Fork button in the top right corner.
4. You should now have a copy of the original repository in your GitHub account.

#### How to Clone

To clone the Popping repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Bubbles](https://github.com/Esmael-Pinho/Second-Milestone-Project).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

# Testing

### W3C Validator

* Initial Testing

| **Overlay-Home-Page** | **Levels** | **Game** | **404-Page** | **End-Game-Page** | **Style.css** |
|-----------------------|------------|----------|--------------|-------------------|---------------|
| [Home-Page](/docs/assets/images/readme/home-page-initial-test.png) | [Levels](/docs/assets/images/readme/levels-page-initial-test.png) | [Game-Page](docs/assets/images/readme/Game-page-initial-test.png) | [404-Page](docs/assets/images/readme/Page-404-test.png) | [End-Game-Page](docs/assets/images/readme/WC3-final-test/End-game-final-test.png) |[Css](docs/assets/images/readme/Css-initial-test.png) |
|* Warning about using aria-label on div |* Unnecessary use of type attribute for script javascript, and aria-labelledby for empty content |* Duplicated ids and empty heading 'h2' |* No issues found |* No issues found |* No issues found |


* Final Testing

| **Overlay-Home-Page** | **Levels** | **Game** | **404-Page** | **End-Game-Page** | **Style.css** |
|-----------------------|------------|----------|--------------|-------------------|---------------|
| [Home-Page](/docs/assets/images/readme/home-page-final-test.png) | [Levels](/docs/assets/images/readme/Levels-page-final-test.png) | [Game-Page](docs/assets/images/readme/WC3-final-test/Game-page-final-test.png) | [404-Page](docs/assets/images/readme/Page-404-test.png) | [End-Game-Page](docs/assets/images/readme/WC3-final-test/End-game-final-test.png) | [Css](docs/assets/images/readme/CSS-test/CSS-final-test.png) |
|* No issues found |* No issues found |* Warning empty heading, but i want and need that heading to be empty, as i will be adding extra code through game.js |* No issues found |* No issues found |* No issues found |


### JShint

| **Script.js** | **Email.js** | **Game.js** |
|---------------|--------------|-------------|
| [Script test](/docs/assets/images/readme/Jshint-test/Script-js-test.png) | [Email test](/docs/assets/images/readme/Jshint-test/email.js-test.png) | [Game.js test](docs/assets/images/readme/Jshint-test/Game-javascript-test.png) |
|* Warning: 2 undefined variables -$- and innerwidth . It kept saying that the jquery symbol was undefined, I did search as to why that could be but couldn't find any reason. |* Warnings: 2 undefined variables -$- and emailjs, and 1 unused sendEmail, but sendEmail is link on the html page. |* Warning 1 undefined varial the jquery dollar symbol |


### Lighthouse
Initial Testing:

| **Overlay-Home-Page** | **Levels** | **Game** | **404-Page** | **End-Game-Page** |
|-----------------------|------------|----------|--------------|-------------------|
| [Home-Page](/docs/assets/images/readme/LightHouse/home-page-lighthouse-test.png) | [Levels](/docs/assets/images/readme/LightHouse/levels-page-lighthouse-test.png) | [Game-Page](docs/assets/images/readme/LightHouse/game-before-start-lighthouse-test.png) | [404-Page](docs/assets/images/readme/LightHouse/page-404-lighthouse-test.png) | [End-game](docs/assets/images/readme/LightHouse/End-game-lighthouse-test.png)
|* No main issues.Just the fact that I have some extensions that seem to be affecting the SEO. - Final test to be on a incognito mode, to see if the issue continues. |* Extensions issues |* Extensions issues |* Extensions issues | error displayong the performance as it shows [this](docs/assets/images/readme/Lighthouse-error.png) |

Final Testing:

| **Overlay-Home-Page** | **Levels** | **Game** | **404-Page** | **End-Game-Page** |
|-----------------------|------------|----------|--------------|-------------------|
| [Home-Page](/docs/assets/images/readme/LightHouse/Game-lighthouse-test.png) | [Levels](/docs/assets/images/readme/LightHouse/) | [Game-Page](docs/assets/images/readme/LightHouse/) | [404-Page](docs/assets/images/readme/LightHouse/) | [End-Game-Page](docs/assets/images/readme/LightHouse/End-game-lighthouse-test.png)
|* On the img above it worked, but most of times doesn't work like [this](docs/assets/images/readme/LightHouse/Game-medium-lighthouse-fail.png), or [this](docs/assets/images/readme/LightHouse/Game-hard-level-lighthouse-fail.png) |* same error for the late testings, as i dont't understand because the intial testings worked ![error](docs/assets/images/readme/Lighthouse-error.png) |* Initial test ok but last test ![error](docs/assets/images/readme/Lighthouse-error.png) |* Initial test ok but last test ![error](docs/assets/images/readme/Lighthouse-error.png) |* Initial and last test ![error](docs/assets/images/readme/Lighthouse-error.png) |




### Full Testing

To fully test my website I performed the following testings using a number of browsers (Chrome, Edge, Firefox, Opera).

- All pages:

| Feature | Test Performed | Expected Result | Pass/Fail |
|---------|----------------|-----------------|-----------|
| The Sites Logo | Clicking on the logo link directs the user back to the home page | Home page loads | Pass |
| Links | Clicking the on the buttons and social links on the footer should direct the user to the desired location | User directed to a next page, or a new page, or sound off/on | Pass |
| Custom cursor | The cursor displays when hovering over clickable content | Bubble cursor displays | Pass |
| Hover button effect | Hovering over btns and links or logo | The logo when hovered changes the color. The btn display extra borders when hovering over. Level buttons change colors and home and sound btns display a blue border | Pass |

- Home Page: 

| Feature | Test Performed | Expected Result | Pass/Fail |
|---------|----------------|-----------------|-----------|
| Demo Button | Clicked demo btn | Play btn disappears and displays a container with a video. The demo btn text turns to close.| Pass |
| Close Button | Clicked close btn | Play btn shows back again and hides container with video demo  | Pass |
| Play Button | Clicked play btn | User is directed to Levels page | Pass |


- Levels Page: 

| Feature | Test Performed | Expected Result | Pass/Fail |
|---------|----------------|-----------------|-----------|
| Logo Button | Clicked Logo | Clicking on the logo link directs the user back to the home page | Home page loads | Pass |
| Home Button | Clicked home btn | Clicking on the logo link directs the user back to the home page | Home page loads | Pass |
| Easy Button | Clicked level easy btn | User is directed to Game page on easy difficulty mode, questions color green. | Pass |
| Medium Button | Clicked medium btn | User is directed to Game page on medium difficulty mode, questions color yellow.| Pass |
| Hard Button | Clicked hard btn | User is directed to Game page on hard difficulty mode, questions color red| Pass |
| Sound Button | Clicked sound btn | User can toggle between sound on or off, displaying the sound on icon or sound off | Pass |
| Feedback Button | Clicked feedback/message btn | Modal opens up that allows the user to fill in a form with, name, email, and a message, that can then be submitted, via the submit btn to send a message | Pass |

- Game Page: 

| Feature | Test Performed | Expected Result | Pass/Fail |
|---------|----------------|-----------------|-----------|
| Logo Button | Clicked Logo | Clicking on the logo link directs the user back to the home page | Home page loads | Pass |
| Home Button | Clicked home btn | Clicking on the logo link directs the user back to the home page | Home page loads | Pass |
| Start Button | Clicked start btn | Game starts, displays the scoreboard, along with the questions. Start button hides| Pass |
| Gameplay | Clicked start btn | Questions displays, user answers correctly and the score, along with the correct answers will increase, score by 10, correct answers by 1, as well as the question counter, until 10. If answered incorrectly incorrect answers will the increment by 1. On a total of 10 questions game ends. | Pass |
| Sound Button | Clicked sound btn | User can toggle between sound on or off, displaying the sound on icon or sound off | Pass |
| Feedback Button | Clicked feedback/message btn | Modal opens up that allows the user to fill in a form with, name, email, and a message, that can then be submitted, via the submit btn to send a message | Pass |


- End-Game Page: 

| Feature | Test Performed | Expected Result | Pass/Fail |
|---------|----------------|-----------------|-----------|
| Logo | Clicked logo | The user is directed to the home page | Pass |
| Home Button | Clicked home btn | User is directed to home page | Pass |
| Feedback Button | Clicked feedback/message btn | Modal opens up that allows the user to fill in a form with, name, email, and a message, that can then be submitted, via the submit btn to send a message | Pass |
| Play Again btn | Clicked play again | The user is taken back to the Levels page where it can select the difficulty level it requires ans play again | Pass |

- 404 Page: 

| Feature | Test Performed | Expected Result | Pass/Fail |
|---------|----------------|-----------------|-----------|
| Logo | Clicked logo | The user is directed to the home page (to try again, that will probably fix the issue) | Pass |
| Home Button | Clicked home btn | User is directed to home page | Pass |
| Feedback Button | Clicked feedback/message btn | Modal opens up that allows the user to fill in a form with, name, email, and a message, that can then be submitted, via the submit btn to send a message | Pass |



# Credits

## Content
* Logo image: [Microsoft Bing](https://www.pngkey.com/png/full/1-19017_bubbles-png.png)
* Loading Gif: [Tenor](https://tenor.com/en-GB/view/loading-load-circle-buffering-waiting-gif-15572297)
* Background image: [Pexels](https://www.pexels.com/photo/drops-of-water-3391752/)
* Sound Effects: [Mixkit](https://mixkit.co/free-sound-effects/game/)

## Code

* Home Page Overlay Bubbles: [Youtube](https://www.youtube.com/watch?v=noC22oMVb44&t=1s) // code used on overlay - home page then created a random color function and applied to it to make more colorful.

* Fetch data from Json file: [Youtube](https://www.youtube.com/watch?v=Oage6H4GX2o) // video used to help me understand and how to pull the json file array to my javascript. Then did i little search on how to convert it to JQuery as i used it to code .

* Logo Gradient: [Youtube](https://www.youtube.com/watch?v=f3mwKLXpOLk&list=PL4-IK0AVhVjMI45H5E9oE47wj-7AZLNnK) - code used on site logo // a hover animation that I found interesting to add, but code: background-clip: text; wasn't working. did i little search and found out why. None compatible with the browser. this one worked thought: -webkit-background-clip: text; 

* Email.js: [Code Institute emailJs walkthrough project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/?child=first)


Please note this is a personal project. This website is purely for the sake of the developer's portfolio and not for public consumption.

Thank You, for getting this far!

Esmael Pinho
2023