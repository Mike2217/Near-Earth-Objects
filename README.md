# Near-Earth-Objects

Project #1: Your First Application
STEP 1: Read the Directions
Read ALL of the directions before you start. We will know...
STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials before your meeting and put them in your README.md:

App Title: Near-Earth-Objects


App Description: Pull data on near earth objects from nasa's NEO api over a given timeline. With the fun ability to pick a random object, as well as the largest and fastest object in the given timeframe.


API: https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY.


API Snippet: 

- id": "3092154",
- "neo_reference_id": "3092154",
- "name": "(1996 VB3)",
- "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3092154",
- "absolute_magnitude_h": 22.1,
- "estimated_diameter": {
      - "kilometers": {
        -  "estimated_diameter_min": 0.1010543415,
         - "estimated_diameter_max": 0.2259643771
                    },
             - "meters": {
                - "estimated_diameter_min": 101.054341542,
                - "estimated_diameter_max": 225.9643771094
                    },
             - "miles": {
                -  "estimated_diameter_min": 0.0627922373,
                -  "estimated_diameter_max": 0.140407711
                    },
           -   "feet": {
                 -  "estimated_diameter_min": 331.5431259047,
                 -  "estimated_diameter_max": 741.3529669956
                    }
               
Wireframes: https://whimsical.com/nasa-neo-CiUwRJLUBp6bzwEFuGnF1c

MVP: 
HTML, CSS, JAVASCRIPT: Pretty straightforward
Flexbox for images as well as buttons and input fields
Axios pulls data from NASA API, returns that information to text field next to image.
Figured I'd just wrap the images in media query, it wont turn out as planned, so I'll spend a good amount of time making it available for media


Post-MVP: Realistically, I doubt I will get the fastest object and largest object done in time, so I'd like to get those done if I have extra time.


Goals: 

DAY 1/2: CSS Frame/Get the fetch the API data and get the JavaScript squared away.
DAY 3/4: Entirely CSS
DAY 5: Work on input fields as well as resource links




Priority Matrix/Timeframes: Table in wireframe link above.



STEP 3: Make a New Repo
Make a new personal GitHub repo for your project. DO NOT FORK THIS REPO.
This new repo should be under your personal Github account, not you GA Eneterprize account.
Make sure your new repo is set to "Public" and initialize it with a README.md file. This will be your project worksheet.
Send a link for your repository to your Squad Leader.
After your have been approved, clone this new repository down to your machine.
CD into the project directory and touch index.html, style.css and script.js files.
Test a commit and push it to make sure everything is connected with git commit -m "Go Bees!".
Note: Your repository should not be called project-1! Think of a name for your application, and then name your repository after your application.

STEP 4: 🔴 Build Your Project MVP — Mandatory To Pass
Your application must meet these requirements:
Built with HTML, CSS, and JavaScript.
Styled using Flexbox or Grid.
Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
Fulfill the build requirements you have specified in your MVP.
Deployed site to a hosting service like Github Pages.
Make commits to GitHub every day.
A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.
📋 List of APIs
Below is a non-exhaustive list of some free APIs you can use. There are many APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

Weather: https://openweathermap.org/api
News: https://newsapi.org/
Giphy: https://developers.giphy.com/
Pokemon: http://pokeapi.co/
Card Deck: https://deckofcardsapi.com/
City of Chicago: https://data.cityofchicago.org/
Beer: https://www.brewerydb.com/developers
Chuck Norris: http://www.icndb.com/
Rick and Morty: https://rickandmortyapi.com/documentation/#rest
This site lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We highly suggest using a free API for your first project dealing with one.

STEP 5: 🔵 Ideas for Post-MVP - Not Mandatory
Look into localstorage so you can save data to the user's browser
Add a second API.
Add creative use of event listeners and UI interaction.
Add media queries for responsive design.
Add animations.
Get input from a UX student on how to make your app have intuitive UI and design.
STEP 6: Technical Demonstration
All projects will be presented to the class. Your presentation should:

Be no longer than 5 minutes in length
Show off all features of the app
Explain the technical details
Explain the technical challenges
Explain which improvements you might make
Your presentation should NOT:

Focus on what you didn't accomplish.
You will be sharing your project and your code. Be prepared to answer questions from the instructors and other students.

Did you read all of the directions before starting? If so write git commit -m "bee's bee buzz'n" instead of git commit -m "first commit" for your first commit.

Step 7: Help and Support
Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. Tokens cannot be transferred between students - there is no black market for tokens.

Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your issue ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates.

Sign up here for help with your squad lead.

Step 8: Grading
Hard Requirements
The following requirements must be met in order for the project to be considered complete:

The project is deployed to GitHub Pages or a custom domain
The application renders in the browser and runs without errors
The repo has a README that adequately documents the project
We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit.

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential.

An example of the gist can be found here: Secret Gist

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader.

