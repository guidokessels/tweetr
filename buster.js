var config = module.exports,
    fs = require("fs");

config["Tweetr"] = {
    rootPath    : "./",
    environment : "node",
    libs        : [],
    sources     : ["lib/**/*.js"],
    tests       : ["test/**/*_test.js"]
};