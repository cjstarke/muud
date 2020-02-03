# muud
CJ Starke SEI Project 1

Description:
The basic idea of the app is to function like a mood ring. You put a mood ring on your finger, and it turns a random color that predicts your "mood". Muud "takes your fingerprint" and returns a random mood. the logarithm that determines the mood is weighted by the day of the week, time of day, and weather.

MVP: 
1. The app needs to have 3 pages. On the first page, it takes asks the users geolocation. On the second page, the mood is "calculated" based off of the touch or click of the user. The third page returns the users location, time and weather info, as well as their predicted mood.
2. The app must get the user's geolocation from the browser, then use that information in the api call to openweathermap.org. Then it gets the current date and time using newDate().

3. an algorithm needs to run that produces a random number, weighted by these variables (temparature, precipition, day of the week and time). There will be 5 ranges of numbers that each return a specific mood.

Post MVP: 
1. css animation of swirling colors on the second page.
3. The page that returns the mood also returns interesting artwork or advice for each mood. For example, calls the gify api to show a random gif of the specific mood. Maybe the mood page even plays a song based on the mood

API: http://api.openweathermap.org/data/2.5/weather?

/Users/CJstarke/Mandalorians/Unit_1/project_1/muud/png wireframes/Project 1 Wireframes.pdf