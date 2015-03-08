var development = {
  firebase: {
    rootRefUrl: "YOUR_FIREBASE_URL",
    serverUID: "YOUR_GENERATED_UID",
    secretKey: "YOUR_FIREBASE_SECRET_KEY"
  }
};

var test = {
  firebase: {
    rootRefUrl: "YOUR_FIREBASE_URL",
    serverUID: "YOUR_GENERATED_UID",
    secretKey: "YOUR_FIREBASE_SECRET_KEY"
  }
};

var production = {
  firebase: {
    rootRefUrl: process.env.FB_URL,
    serverUID: process.env.FB_SERVER_UID, 
    secretKey: process.env.FB_SECRET_KEY
  }
};

var config = {
  development: development,
  test: test,
  production: production,
};
module.exports = config;