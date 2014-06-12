module.exports = {
    db: {
        name: "mean_idea",
        password: "",
        username: "root"
    },
    app: {
        name: "MEAN IDEA - Development"
    },
    facebook: {
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    google: {
        realm: "http://localhost:3000/",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}
