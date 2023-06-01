*This lesson is important because it explains status code meanings and shows us how to build a REST API with apps and databases*

*Status Codes Based On REST Methods*

In your own words, describe what each group of status code represents:

100’s = informational

200’s = success

300’s = redirection - queried data was moved

400’s = client error - query was not able to be processed

500’s = server error - data was not able to be sent to the page

What is a status code 202?<br>
-The query request was acceepted for processing but hasnt been completed yet

What is a status code 308?<br>
-The requested resource has been moved to a different URL

What code would you use if an update didn’t return data to a client?<br>
-204 No Content

What code would you use if a resource used to exist but no longer does?<br>
-410 ("Gone")

What is the ‘Forbidden’ status code?<br>
-403; given when a client has valid credentials but not  enough privileges to preform an action


*Build A REST API With Node.js, Express, & MongoDB - Quick*

Why do we need to pull our MongoDB database string out of our server and put it into our .env?<br>
-Storing data in a .env file makes it more secure and manageable

What is middleware?<br>
-A software that acts as a "middle man" between different parts of an app

What does app.use(express.json()) do?<br>
-Enables parsing of JSON data from requests in express apps

What does the /:id mean in a route?<br>
-It is the identifier from the URL path

What is the difference between PUT and PATCH?<br>
-PUT alters the entirety of a resource that was identified by the URL and PATCH partially updates a resource with changes made

How do you make a default value in a schema?<br>
-By creating a new document without a set path, the default value will be the placeholder

What does a 500 error status code mean?<br>
-An unexpected error occurred that prevented the server from completing its request

What is the difference between a status 200 and a status 201?<br>
-200 is a successful request and response while 201 is a successful request that creates a new resource