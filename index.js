const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const questions = () => 
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
        choices: ['MIT', 'Mozilla', 'Do What The F*ck You Want To Public License' ]
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

  questions()
  .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
  .then(()=> console.log('Sucess you wrote a readme.md!'))
  .catch((err)=> console.error(err));

