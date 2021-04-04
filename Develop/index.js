//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([

        //personal and conatact info 
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'githubName',
            message: 'Enter your GitHub Name',
          },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
        {
            type: "input",
            name: "otherContact",
            message: "Please enter any other contact methods",
          },

        //Project specific 
         {
            type: 'input',
            title: 'title',
            message: 'What is the projects Title? (Required)',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log('Please enter the projects title!');
                }
            }
        },

    {
        type: 'input',
        name: "projectDescription",
        message: "Please Enter a description of your project (Required)",
        validate: projectDescription => {
            if (projectDescription){
                return true;
            } else {
                console.log('Please enter the projects description!');
            }
        }
    }, 
    {
        type: 'input',
        name: 'githubLink',
        message: "Please enter the github link, if you have one.",

      },

    {
        type: "input",
        name: "installInfo",
        message: "What are the installation instructions to running the app"
    },
    {
        type: 'input',
        name: 'usageInput',
        message: 'Please describe how to use the app. (Required)',
        validate: usageInput =>{
            if(usageInput){
                return true
            } else {
                console.log("Usage instructions are required");
                return false;
            }
        }
    },
    {
        type: "checbox", 
        name: "license", 
        message: 'What type of licensesing does this project fall under.',
        choices: ['Public domain', 'Permissive','LGPL', 'Copyleft', 'Proprietary']
    },
    {
    type: 'confirm',
    name: 'contributConfirm',
    message: "Are there any contributors with this project you would like to credit ",
    default: true
    },
    {
        type: 'input',
        name: 'contributInput',
        message:'Please give credit to your collaborators or any outside sources.',
        when: ({ contributConfirm }) =>{
            if(contributConfirm){
                return true
            } else {
                return false
            }
        }
    }

    ])
    .then(readmeData => {
        questions.data.push(readmeData);
        return projectData;
    })
};



// 

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

// questions()
// .catch(err => {
//     console.log(err)