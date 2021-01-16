const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown.js");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// array of questions for user
const promptUser = () => {
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description about your project',
    },
    {
      type: 'checkbox',
      name: 'toc',
      message: 'What would you like to include in your table of contents?',
      choices: ['Installation', 'Usage', 'Contribution', 'License', 'Test', 'Questions']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'List the necessary steps for a user to take to install your application',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage section:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Did anyone work on this with you?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Did anyone work on this with you?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Did anyone work on this with you?',
      },
  ]);
}
questions();

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
 
}
// function call to initialize program
init();
