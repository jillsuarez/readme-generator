// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    return "[![badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Boost 1.0") {
    return "[![badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if(license == "none") {
    return ""
  } ;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
      return " [MIT](https://opensource.org/licenses/MIT)"
    } else if (license === "Apache 2.0") {
      return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "Boost 1.0") {
      return "[Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)"
    } else if(license == "none") {
      return ""
    } ;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return ""
  } else {
    return "## Licenses"
  }
}

function renderCredits (confirm, contributers) {
  if (confirm == true) {
    return `${contributers}`;
  } else {
    return "No credits at this time!"
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  GitHub Repository:

  https://github.com/${data.userName}/${data.repoName}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${renderCredits(data.confirm, data.contributers)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributions 
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions?
  Email: 
  
  ${data.email}
  
  GitHub Profile:
  
  https://github.com/${data.userName}


  
`;
}

module.exports = generateMarkdown;
