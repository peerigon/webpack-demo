var greeting = require("./greeting.js");

var dependencies = [
    "stuff"
];

dependencies.map(function (dependency) {
    require("./other/" + dependency);
});

console.log(greeting);
