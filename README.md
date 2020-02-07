# muud
CJ Starke SEI Project 1

## Description:
The basic idea of the app is to function like a mood ring. You put a mood ring on your finger, and it turns a random color that predicts your "mood". Muud "takes your fingerprint" and returns a random mood. the logarithm that determines the mood is weighted by the day of the week, time of day, and weather.

## MVP: 
The app needs to have 3 pages. On the first page, it takes asks the users geolocation. On the second page, the mood is "calculated" based off of the touch or click of the user. The third page returns the users location, time and weather info, as well as their predicted mood.

The app must get the user's geolocation from the browser, then use that information in the api call to openweathermap.org. Then it gets the current date and time using newDate().

 an algorithm needs to run that produces a random number, weighted by these variables (temparature, precipition, day of the week and time). There will be 5 ranges of numbers that each return a specific mood.

## Post MVP: 
 css animation of swirling colors on the second page.
 The page that returns the mood also returns interesting artwork or advice for each mood. For example, calls the gify api to show a random gif of the specific mood. Maybe the mood page even plays a song based on the mood

## API:
 (http://api.openweathermap.org/data/2.5/weather?)

## Wireframes
## phone pages
![first phone page](https://i.imgur.com/WtqDnAu.png)
![second phone page](https://i.imgur.com/9cQK0Qr.png)
![third phone page](https://i.imgur.com/Cs7VQtb.png)
## ipad pages
![first ipad page](https://i.imgur.com/9UO8tdx.png)
![second ipad page](https://i.imgur.com/DUymDFT.png)
![third ipad page](https://i.imgur.com/9NNUr1S.png)
## webpages
![frist webpage](https://i.imgur.com/8N6Yy6i.png)
![second webpage](https://i.imgur.com/9Kn0vR5.png)
![third webpage](https://i.imgur.com/YhPkBqc.png)

##  Final Product

I completed the MVP, which was calling a weather api and putting your current weather info, along with the day of the week and time, into a weighted algorithm to produce a random Mood, giving each mood their own page.
I used the weathermap api to find the weather, and an ap api to find the curent location, becuase I couldn't ask for the geolocation once I deployed it to surge, which is not "secure".

I was also able to add a third api, the giphy api, to return a random gif based off of the returned mood. I was able to create css animation on the page that "finds their mood".

## Final address and apis
[Web address](muud.surge.sh)

[location api](http://ip-api.com/json/)

[Weather api](http://api.openweathermap.org/data/2.5/weather?)

[GIF api](https://api.giphy.com/v1/gifs/)
