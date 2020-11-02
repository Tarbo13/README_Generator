module.exports = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "project"
    },
    {
        type: "input",
        message: "Enter your project description.",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions?",
        name: "instructions"        
    },
    {
        type: "input",
        message: "How to use this program?",
        name: "usage"
    },
    {
        type: "input",
        message: "who contributed to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How is testing performed?",
        name: "test"
    },
    {
        type: "list",
        message: "Program license?",
        choices: ["MIT", "Apache", "Boost"],
        name: "license"
    },
    {
        type: "input",
        message: "What is GitHub user name?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];