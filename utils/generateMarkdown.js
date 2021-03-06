// Function to generate markdown for README
function generateMarkdown(data) {
return `
## ${data.title}
![Licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Contributors
${data.contributors}

## Test
${data.test}

## Questions
if you have any questions or feedback, please contact me: ${data.email}. More of my projects are available on https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
