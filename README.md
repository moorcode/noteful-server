# Express Boilerplate!

Use this to create a new Express server

## Set up

Complete the following steps to start a new project (new-project-name):

1. Clone this repository to your local machine `git clone boilerplate-url new-project-name`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install` (must have node and npm installed on your computer)
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use `new-project-name` instead of `"name": "express-boilerplate",`
7. Change the README

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's main branch.

## Make a BoilerPlate from Scratch

1. Create a new project: `express-boilerplate`
2. Hide node_modules in .gitignore file: `echo "node_modules" > .gitignore`
3. Initialize NPM: `npm init -y`
4. Install the dependencies we'll need: `npm i express morgan cors dotenv helmet`
5. Create a new directory: `src`
6. Create a new file `app.js`. In the file, use these dependencies, initialize the dotenv, add the basic middleware, set Morgan to be less verbose when in production, and export the app ready for integration testing
7. Create a new file: `echo "NODE_ENV=development" > .env` 
8. Hide .env in .gitignore
9. Create a new file `server.js`. In the file, import ./app and start server
10. Set up the npm script for npm start inside package.json
11. Set up the testing and development workflow: `npm i mocha chai supertest nodemon -D`
12. Create a new directory and file `test/app.spec.js`. In this file, code a basic endpoint test and add endpoint to app.js
13. Create a new file `test/setup.js`. In this file, set expect and supertest global variables for convenience.
14. Add the following data to your optional eslintrc.js file to ensure the linter doesn't complain when you use the expect and supertest libraries globally in your test files:
"globals": {
  "supertest": true,
  "expect": true
}
15. Hide error messages from users and other malicious parties in production app (see errorHandler)
16. Create a new file `cp .env example.env` with contents:
NODE_ENV=development
PORT=8000
EXAMPLE="example-environment-variable"
17. Create a new file `config.js` with contents:
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
}
18. Refactor server.js and app.js
19. Create Heroku Procfile with contents: `web: node src/server.js`
20. Add (pre)deploy scripts to package.json