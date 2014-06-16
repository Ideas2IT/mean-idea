module.exports = {
    db: {
        name: "meanidea",
        password: "root",
        username: "root"
    },
    app: {
        name: "MEAN IDEA - Development"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    google: {
        realm: "http://localhost:3000/",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}
