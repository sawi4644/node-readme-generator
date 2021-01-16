// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${badge}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${license}
  ## Contact for Questions
  - Github: https://github.com/${data.github}
  - Email: ${data.email}
  `;
}


export default generateMarkdown;
