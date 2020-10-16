## Donate-things concept application
Project of web application that would allow the user to donate unused things to various charity organisations.
The concept facilitates the user to specify details of his donation for the middle-party (site operator) to collect the things and donate them to the charity. 

## Live demo
<b>Live demo available: [https://donate-things.web.app/](https://donate-things.web.app/)</b>
<br/><br/>
Disclaimer: This project is currently not RWD and best displayed on desktop, for responsiveness please check my other and all future projects which are mobile-first approach.

## Completed features
* Landing page
* Donations summary counters displayed on Landing page, gathered from Firebase Realtime Database
* Contact Us form pointing to the fake API endpoint which returns success response if data is valid (frontend validation also applied)
* User authentication via Firebase. Register, LogIn and LogOut methods with email and password available
* Protected routing, which allows access to the main Donation Form for the authenticated user.
* Main Donation Form - Multi step validated form, which facilitates the user to provide details of the donation

## To Do
* Assignment of the Donate Form data to the user in the database
* User profile interface allowing to review and manage her/his donations

## Technologies
* HTML5
* CSS/Sass (BEM methodology)
* Javascript (ES6)
* React (Hooks)
* Context API
* Firebase
* Webpack

## Installation

Installation requires npm (node package manager). After the project is cloned, all packages and dependences can be downloaded with the command:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

