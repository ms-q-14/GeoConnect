<br/>
<p align="center">
  <a href="https://github.com/ms-q-14/geoconnect">
    <img src="https://i0.wp.com/www.pinyourfootsteps.com/wp-content/uploads/2020/02/earth-globe.png?fit=512%2C512&ssl=1" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GeoConnect</h3>

  <p align="center">
    Sharing the best (and worst) places with your friends.
    <br/>
    <br/>
    <a href="https://github.com/ms-q-14/geoconnect"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/ms-q-14/geoconnect/issues">Report Bug</a>
  </p>
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## About The Project

![Screen Shot](https://i.imgur.com/PSomLv3.png)

Are you tired of constantly trying to remember all of the great places your friends have recommended to you? Do you find it hard to keep track of all the different restaurants, bars, stores, and more that your friends have told you about? This app is here to help. With this app, you and your friends can easily review and recommend places to each other, all in one convenient location. No more digging through text messages or trying to remember that one awesome coffee shop your friend told you about. With this app, all of your recommendations are stored in one place, making it easy to find and plan your next outing with your friends.

But this app isn't just about storing recommendations - it's about discovering new places and having fun with your friends. You can browse recommendations from your friends or search for specific types of places in your area. You can also see what your friends are up to and join them on their latest adventure. Whether you're looking for a new restaurant to try, a cool store to shop at, or just want to hang out with your friends, this app has you covered. All of your friends' top picks will be stored in one convenient location, ready for you to discover and enjoy.

## Built With

- [MongoDB](https://www.mongodb.com/home)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)

## Demo

The following demo indicates the current build of the application:

The login and sign up:

https://user-images.githubusercontent.com/85078191/209266530-9a605cdb-a0e5-4f82-adb0-3d8c2d8bb8ec.mp4

Adding new geo locations:

https://user-images.githubusercontent.com/85078191/209266889-8273cbd1-f4f2-47aa-9de9-d334bb0e0fe7.mp4

Opening other pins and locating your location:

https://user-images.githubusercontent.com/85078191/209267324-4932d54d-9243-42ad-b83f-2fbc1e40dab1.mp4

## Getting Started

The following is the description of how to get the app working on your personal machine. BEWARE first load up of the application may be a little slow. Please be patient.

Account Log In:

User: test
<br/>
Password: 123

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone
HTTP: https://github.com/ms-q-14/geoconnect.git
SSH: git@github.com:ms-q-14/geoconnect.git
```

2. Install NPM packages

```sh
1. cd frontend --> npm install --force
2. cd backedn --> npm install
```

3. Acquire API key and MongoDB URL

```sh
1. Go to https://account.mapbox.com/ and acquire an api key
2. Locate .env under frontend folder file and enter api key after REACT_APP_MAPBOX
3. Go to https://www.mongodb.com/ and create a culter and click connect to app to mongo url
4. Locate .env file under backend folder and enter mongo url key after MONGO_URL
```

4. CD to Frontend and Backend and run

```sh
Open a terminal:
1. cd backend
2. sudo npm install -g nodemon
3. npm install
4. npm start


Open another terminal:
1. cd frontend
2. npm install
3. npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
4. npm start
```

## Usage

-Sharing recommendations with a specific friend

-Planning an outing

-Discovering new places

-Keeping track of all recommendations from friends
