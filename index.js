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
      type: 'input',
      name: 'installation',
      message: 'List the necessary steps for a user to take to install your application',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does one use your application?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select one license you wish to use:',
        choices: ['MIT', 'Mozilla Public License 2.0', 'Creative Commons License Family', 'Do What The F*ck You Want To Public License' ]
      },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are you looking for anyone to contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Command that will run code:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
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
