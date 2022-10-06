## Professional README Generator
![Licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description
A convenient solution for developers to generate a README file for their projects. This is a command line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#usage)
- [Contributors](#contributors)
- [Test](#test)

## User Story
As a developer, I want a README generator so that I can quickly create a professional README for a new project. 
Given a command-line application that accepts user input...
- When I am prompted for information about my application repository, a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
- When I enter my project title, this is displayed as the title of the README.
- When I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
- When I choose a license for my application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under. 
- When I enter my GitHub username, this is added to the section of the README entitled Questions, with a link to my GitHub profile.
- When I enter my email address, this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
- When I click on the links in the Table of Contents, I am taken to the corresponding section of the README. 

## Installation
Please clone this GitHub reposiroty and install Inquirer package. Inquirer installation instructions and details can be found at https://www.npmjs.com/package/inquirer

## Usage 
- Use `node index` in the command line to launch the application then follow the prompts. README.md file will be generated under the "dist" folder.
- A walkthough video can be found here: https://drive.google.com/file/d/1dPn6gGm62wG-LFsWywlb80cxLQFz-Q3N/view

![Screenshot](tutorial.gif)

## Screenshot
Screenshot of Generated README file Code:
![Generated README](screenshot.jpg)

## Contributors
Malick Ba, Software Engineer

## Test
No testing required.

## More Projects
This README file was generated using the readme-generator.

Author: **Malick Ba**, Software Engineer based in Virginia, USA. For more projects, please visit my [GitHub page](https://github.com/malickbax)
