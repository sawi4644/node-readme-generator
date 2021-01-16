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
 
  `;
}


export default generateMarkdown;
