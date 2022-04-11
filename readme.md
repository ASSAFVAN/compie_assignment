This is a home assignment from Compie Technologies on NodeJS.
I had to:

Have a CSV file represents a databse. I had to Create an endpoint of player ID. Fetch data from external api with players extra data and return a new CSV file with the extra data from the api for the specific player.

Then I had to implement a persistent cache in any way I find (local files, redis ect).
I chose to create dynamic json files that represent the cache per player.
If there is a cache, the data will pull from the cache, otherwise create a fetch from the 
api and set a new cache for the specific player.

Third, I had to implement a job that pulls the player details every 15 minutes and updates the persistent caching if necessary. 


I've used the following node packages:

axios - fetching the Balldontlie API 
csvtojson - converting the csv files to json
express - running server and handle routes and controllers
json-2-csv - converting json to csv 
nodemon - testing the code without restat manually the server
isEqual = quick way to compare data of two objects (the api json and the cache)
node-cron - schedualling the job to run every 15 minutes


