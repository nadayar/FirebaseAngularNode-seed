# The boilerplate for Firebase+Angular+Node apps (i.e. FAN stack)

## Introduction
This starter pack is for anyone building a web app with [Firebase](https://www.firebase.com/tutorial/), [AngularJS](http://docs.angularjs.org/tutorial), and [Node.js](https://nodejs.org/). Firebase's realtime data store works well with Angular's two-way data binding and content rendering. Node.js is used in the backend to make our app API capable.

We recommend taking the tutorial on both [Firebase](https://www.firebase.com/tutorial/) and [AngularFire](https://www.firebase.com/docs/web/libraries/angular/api.html) the officially supported AngularJS binding for Firebase.

We also use [Material Design](https://material.angularjs.org/#/) to make our app looks nice.

The seed is preconfigured to install the Angular framework, Firebase, angularfire, and a bundle of
development and testing tools.

The seed app doesn't do much, but does demonstrate the basics of FAN stack development,
including:
 * authentication
 * binding synchronized objects and arrays
 * basic account management
 * material design

## How to use FirebaseAngularNode-seed

### Clone FirebaseAngularNode-seed

```
git clone https://github.com/andela-bnkengsa/FirebaseAngularNode-seed.git
cd FirebaseAngularNode-seed
```

### Configure

 * specify your Firebase URL in `config/config.js`
 * generate a UID and set the serverUID in `config/config.js` (this is to authenticate the node server with Firebase)
 * specify your Firebase secret Key in `config/config.js`
 * specify your Test Firebase URL in `app\js\services\refs.js` (this is for the client tests to run properly)

### Install Dependencies

```
npm install
bower install
```

### Configure the Application

 1. Open `config/config.js` and set the value of rootRefUrl constant to your Firebase URL
 1. Open `config/config.js` and set the value of serverUID constant to your generated UID (this used when authenticating the node server with Firebase)
 1. Open `config/config.js` and set the value of secretKey constant to your Firebase Secret Key
 1. Open `app\js\services\refs.js` and specify your Test Firebase URL (this is for the client tests to run properly)
 1. Go to your Firebase dashboard and enable Google authentication under the Login&Auth tab
 1. Copy/paste the contents of `config/security-rules.json` into your Security tab, which is also under your Firebase dashboard.

### Run the Application

We have preconfigured the project with gulp:

```
gulp
```

Now browse to the app at `http://localhost:5555`.

## Directory Layout

    app/                  --> all of the files to be used in production
      img/                --> image files
      js/                 --> javascript files
        controllers/      --> application controllers
        filters/          --> custom angular filters
        services/         --> custom angular services
      shared/             --> shared views (jade templates)
      styles/             --> application sass files
      views/              --> angular view partials (jade templates)
    config/               --> config files
    lib/
      firebase/
        auth.js           --> node module to authenticate server with firebase
    routes/               --> server routes
    test/                 --> test files
      client/             --> frontend unit specs/tests
      e2e/                --> end-to-end specs
      server/             --> backend unit specs/tests
    index.js              --> node server



### Running Tests

- `gulp test` runs all tests

- `gulp test:client` runs frontend tests

- `gulp test:server` runs backend tests


## Continuous Integration

### Circle CI

[Circle CI](https://circleci.com/) is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The FirebaseAngularNode-seed
project contains a Travis configuration file, `circle.yml`, which will cause CircleCI to run your
tests when you push to GitHub.

You will need to enable the integration between CircleCI and GitHub. See the CircleCI website for more
instruction on how to do this.