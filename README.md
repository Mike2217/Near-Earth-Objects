# App Title: Near-Earth-Objects


## App Description: 
#### Pull data on near earth objects from nasa's NEO api over a given timeline. With the fun ability to pick a random object, as well as the largest and fastest object in the given timeframe.


## API: 
- https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY.


## API Snippet:

```
"id": "2465633",
"neo_reference_id": "2465633",
"name": "465633 (2009 JR5)",
"nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
"absolute_magnitude_h": 20.36,
"estimated_diameter": {
"kilometers": {
"estimated_diameter_min": 0.2251930467,
"estimated_diameter_max": 0.5035469604
},
"meters": {
"estimated_diameter_min": 225.1930466786,
"estimated_diameter_max": 503.5469604336
},
"miles": {
"estimated_diameter_min": 0.1399284286,
"estimated_diameter_max": 0.3128894784
},
"feet": {
"estimated_diameter_min": 738.8223552649,
"estimated_diameter_max": 1652.0570096689
}
},
"is_potentially_hazardous_asteroid": true,
"close_approach_data": [
{
"close_approach_date": "2015-09-08",
"close_approach_date_full": "2015-Sep-08 20:28",
"epoch_date_close_approach": 1441744080000,
"relative_velocity": {
"kilometers_per_second": "18.1279547773",
"kilometers_per_hour": "65260.6371983344",
"miles_per_hour": "40550.4220413761"
```
               
               
## Wireframes: 
- https://whimsical.com/nasa-neo-CiUwRJLUBp6bzwEFuGnF1c


![image](https://user-images.githubusercontent.com/92862291/140770223-3c2364ef-3172-4003-97c8-048b6d1dc602.png)



## MVP: 
- Using HTML to get the skeleton framework started
- Using CSS to get the framework formatted correctly
- Flexbox for the inlign images as well as buttons and input fields
- Axios pulls data from NASA API, returns that information to text field next to image.
- Figured I'd just wrap the images in media query, it wont turn out as planned, so I'll spend a good amount of time making it available for media


## Post-MVP: 
- The main goal is the get the functionality of the random Near-Earth-Object working and functional, the intent is to get the "Fastest" and "Largest" object done after as well as a post-mvp effort.

## Goals: 

- DAY 1/2: CSS Frame/Get the fetch the API data and get the JavaScript squared away.
- DAY 3/4: Entirely CSS
- DAY 5: Work on input fields as well as resource links




## Priority Matrix/Timeframes: 
- Table in wireframe link above.



