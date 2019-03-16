# React Boilerplate Project

This is my current boilerplate for beginning a new React project. This project includes:

## Features of this boilerplate include:=

- Routing with Public and Private routes
- A loading page, login page and dashboard page
- A configured redux store with authentication reducer and actions
- Some basic starter styles
- Webpack configuration using the webpack-dev-server for a dev environment
- Eslint and Babel configuration
- Package.json configured for deployment on Heroku

## The default configuration currently uses the following:

- Firebase integrafor a backend
- Authentication using Google
- Redux for state management
- Jest for testing
- Yarn as a package manager

## Dependencies

- Node.js
- npm
- yarn

### To Use This Boilerplate

1. Make sure you have Node.js, npm and yarn installed on your machine.
   - [Node.js and npm](https://nodejs.org/en/)
   - [Windows Installation Instructions](https://blog.teamtreehouse.com/install-node-js-npm-windows)
   - Yarn can be installed by running `npm install yarn` from your terminal.
2. Clone or download this repository to your local machine.
   - To clone from your terminal, navigate to the folder that you want to store the files in and run the following command `git clone https://github.com/jessejburton/react-boilerplate.git .`
   - _the . at the end ensures that the files will be cloned to the current folder._
3. **To Install** In your terminal (in the project folder) run the following command `yarn install` to install the associated node modules.
4. **To Run Dev Server** In your terminal (in the project folder) run the following command `yarn run dev` to start the dev server.
5. **To Build Project** In your terminal (in the project folder) run the following command `yarn run build` to build the assets. This compiles bundle.js and styles.css into the public folder for deployment.
