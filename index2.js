const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./questions");
const generateMarkdown = require("./markdown");

inquirer
.prompt(questions)
.then(response => {

console.log(response);

const responseData = {...response};
const formattedMarkdown = generateMarkdown(responseData);

fs.writeFile("README.md", formattedMarkdown, function(err){
    if(err){
        return console.log(err);

    }
    console.log("success!");
})

});



