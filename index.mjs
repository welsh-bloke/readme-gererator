import inquirer from 'inquirer';
import fs from 'fs/promises';

const contributionsGuidlines = [];

// prompt returns a promise
let { title, description, installation, usage, contribution, tests, licence, username, email } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Project title",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the installation instructions?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "How is the application used?",
        },
        {
            type: 'input',
            name: 'tests',
            message: "What are the instructions for testing?",
        },
        {
            type: 'list',
            name: 'licence',
            message: 'What licence do you need for this app?',
            choices: ['Apache 2.0 License', 'BSD', 'GNU GPL v3', 'MIT', 'The Unlicense']
        },        
        {
            type: 'input',
            name: 'username',
            message: "What is your Github username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address associated with your github account?",
        },
    ]);

let readmeText = `
# ${title}

## Project Description

${description}

## Table Of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Licence](#licence)
6. [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contribution}

## Tests

${tests}

## Licence

${generateLicence(licence)}

## Questions

### This app was created by [Mike Davies](https://github.com/${username})

### If you have any further questions, please contact me at <${email}>
`

fs.writeFile('README.md', readmeText)

function generateLicence(licence) {
    const expr = licence

    switch(licence) {
        case 'Apache 2.0 License':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'BSD':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'GNU GPL v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            break;
    }
}


