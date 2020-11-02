const generateMarkdown = responseData => {
    let projectTxt;
    let descriptionTxt;
    let instructionsTxt;
    let usageTxt;
    let licenseTxt;
    let contributorsTxt;
    let testsTxt;
    let emailTxt;
    let githubTxt;

    if (responseData.project) {
        projectTxt = `# ${responseData.project}`;
    }

    if (responseData.description) {
        descriptionTxt = `## Description
${responseData.description}`
    }

    if (responseData.instructions) {
        instructionsTxt = `## Installation
${responseData.instructions}`
    }

    if (responseData.usage) {
        usageTxt = `## Usage
${responseData.usage}`
    }

    if (responseData.contributors) {
        contributorsTxt = `## Contributors
${responseData.contributors}`
    }

    if (responseData.test) {
        testsTxt = `## Testing
${responseData.test}`
    }

    if (responseData.license === "MIT") {
        licenseTxt = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }  else if (responseData.license === "Apache") {
        licenseTxt = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (responseData.license === "Boost") {
        licenseTxt = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }    

    if (responseData.github) {
        githubTxt = `${responseData.github}`
    }

    if (responseData.email) {
        emailTxt = `${responseData.email}`
    }

    return `
${projectTxt}

${licenseTxt}
    
${descriptionTxt}

${instructionsTxt}

<img src = "Untitled_ Nov 1, 2020 2_13 PM.gif" />

${usageTxt}

${contributorsTxt}

${testsTxt}

## License: \n
For more information about the license click on the link below. \n

${licenseTxt}
    
### Questions: \n
![GitHub Logo](GitHub-Mark-32px.png)
[GitHub Profile](https://github.com/${githubTxt})

If you have additional questions please email me **mailto:**<${emailTxt}>

### Table of Contents:
- [Description](#Description)
- [Installation](#Installation) 
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [License](#License)
- [Questions](#Questions)`;
};

module.exports = generateMarkdown;
