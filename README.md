# shop-shop

Bootcamp Module 22

Project is in development. This is the stater code. Will conver application to use Apollo/GraphQL for backend.

Project focused on `State`

## [Heroku Live app]()

## At the root level: Scripts and dependencies

"scripts": {
"start": "node server/server.js",
"develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
"install": "cd server && npm i && cd ../client && npm i",
"seed": "cd server && npm run seed",
"build": "cd client && npm run build"
},

"devDependencies": {
"concurrently": "^5.1.0"
}

## Front End: Scripts and dependencies

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

"dependencies": {
"@apollo/client": "^3.3.7",
"@stripe/stripe-js": "^1.22.0",
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.5.0",
"@testing-library/user-event": "^7.2.1",
"graphql": "^14.6.0",
"jwt-decode": "^2.2.0",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-router-dom": "^5.1.2",
"react-scripts": "3.4.1"
},

## Back End: Scripts and dependencies

"scripts": {
"start": "node server.js",
"watch": "nodemon",
"seed": "node config/seeds.js"
},

"dependencies": {
"apollo-server-express": "^2.11.0",
"bcrypt": "^4.0.1",
"express": "^4.17.1",
"graphql": "^15.5.0",
"jsonwebtoken": "^8.5.1",
"mongoose": "^5.9.7",
"stripe": "^8.195.0"
},
"devDependencies": {
"nodemon": "^2.0.2"
}

# Contributions by:

DeveloperDuckArroyo

[Email](mailto:DeveloperDuckArroyo@gmail.com)

[Portfolio](https://duckarroyo.github.io/portfolio/)

[React Portfolio](https://peaceful-journey-85026.herokuapp.com/)

[GitHub](https://github.com/DuckArroyo)

[Twitter @DevDuckArroyo](https://twitter.com/DevDuckArroyo)

[LinkedIn](https://www.linkedin.com/in/duckarroyo)

[CodePen](https://codepen.io/DeveloperDuckArroyo)
