# Notable Health Take Home Project
Thanks for taking the time to open this project! You'll find all of the API code for the full application here.

# Installation
Installation is relatively straight forward, just simply run "npm i" to install all of the dependencies.

# Standing Up the Server
The package.json was setup in a way to make it streamlined for anyone that wants to spin up the server without needing to rebuild for any changes. To do so:
    1. Make sure you're in the API directory.
    2. Run "npm run serve"
"npm run serve" is using the concurrently package to run both "npx tsc -w" and "nodemon dist/index.js" at the same time. This way if you'd like to make changes while the server is running it will rebuild the dist folder and then serve up the new index file via nodemon. The server will be running on port 8000.

# Server Troubleshooting
If for any reason it displays that there is another server running on the same port either run:

    1. "npm run build"
    or
    2. "pkill -f nodemon" 
        (please keep in mind this will kill all nodemon instances)
then run "npm run serve" again.

# Data
This project was created with Sqlite3. It is suggested that you download a tool like Sqlite Explorer if you'd like to look
at the tables. The tables can be found through this directory path: src -> db -> tables

# Routes
1. Doctors
    1. GET /doctors
        - Returns all doctors and their information.
    2. GET /doctors/:id
        - Returns a doctor based on their id from the doctor table.
    3. GET /doctors/:id/appointments
        - Returns all appointments for a doctor based on the id given.


