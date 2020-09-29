## Table of contents
* [General info](#general-info)
* [Usage](#Usage)
* [Check Me Out](#CheckMeOut)


## General info
This project is a backend server for MySKills API App. Server is built with Node.js and Express.js. 
Routes return json object/s. For more info check usage. Server connects with MongoDB via mongoose. 

NO .ENV FILE (no credentials to connect to database). 

Server is hosted with Heroku.

Server Live: https://myskillsapi-server.herokuapp.com/

Client side app Live: https://myskills-api.netlify.app/     

Client side app GitHub repo: https://github.com/mat-karpowicz/myskillsapi-client

## Usage

#### GET ALL SKILLS
Use route: "/api/skills". Returns array of JSON objects.

#### GET SKILL BY ID
Use route "/api/skills/:id". Returns JSON object.

#### GET SKILLS WITH PARAMS
Use route "/api/skills/?name=name_of_skill&type=type_of_skill&tag=skill_with_tag". Returns array of JSON object/s.
	
## CheckMeOut
Feel free to check my home webpage https://www.karpowiczm.pl/ to get some more info about me and my other projects. 
