// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `
  ## Table of Contents 
  ----
  * [Description]
  * [Installation]
  * [License]
  * [Contact]
  

  # Description
  ## Title ${data.title}
  ## Project Description ${data.projectDescription}
  ## Image ${data.image}
  ## Git Hub Link ${data.githubLink}

  # Installation
  ## Installation instructions ${data.installInfo} 
  ## How to use ${data.usageInput}

  # License 
  ## What type of licensesing does this project fall under
  ## ${data.license}

  # Contact and Questions
  ## Creator ${data.name}
  ## Email ${data.email}
  ## Other ${data.otherContact}
  ## Contributors ${data.contributInput}

`;
}

module.exports = generateMarkdown;
