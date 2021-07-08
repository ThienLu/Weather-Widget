This website features a simple weather widget that accepts a valid location and returns the current weather and time in that location.

In this website I decided to learn how to use the Angular Framework and also implement the OpenWeather API. 

It grabs data from the API as JSON, parses through the JSON data to grab the relevant portions, converts it to usable data and stores it. Here's what it does specifically:
- converts the sunset value to a date object and compares it to the current date to figure out if it is day or night in the location.
- concatenates the location name and country to a single string
- rounds the main temperature value and appends "°C"
- stores the current weather as a string
- uses the timezone value and current time to get the time in that location and update it every second.

Unlike React, the components in Angular seperates the HTML & TypeScript code but allows you to directly use data values from TypeScript in the HTML code.
I found this much easier to understand and wrap my head around and it makes the frontend UI much easier to develop though, granted, I did not put too much effort into
the design. There is also a CSS file that automatically gets generated for each component which also makes things easier to organise.
All in all, I found that Angular was a little bit easier to learn but it's possible that my prior experience with React affected it. 
