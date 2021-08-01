# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to run the projet ?

```$ yarn ```

```$ yarn start```

## How to build image and run container ?

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

- Run ```docker build . -t {your-docker-username}/iplookup```

- Run ```docker run -p 3000:3000 -d {your-docker-username}/iplookup```

- Navigate to [localhost:3000](http://localhost:3000)

## Using this app as a Docker Image


- Run ```docker pull dl3c01n/iplookup:latest```

- Run ```docker run -p 3000:3000 -d dl3c01n/iplookup```

- Navigate to [localhost:3000](http://localhost:3000)