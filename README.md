
# Good Corner_backend

The backend part of Good Corner




## Requirement

[Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Firebase will be necessary for this part, let's doing it step by step.

1. create a account on [Firebase](https://firebase.google.com/)

2. Click on the "Create a project" button

3. fill up the form (you can name the project whatever you want)

4. When you have finished this, go to the settings of your "project overview"

5. Then, go to the "service accounts" part, and select the "Node.js" option. After that, click on "Generate new private key"

6. Firebase will give you a file with a secret key (it's your's ! Dont show it to no one !).

7. Add this file at the root of the project, and rename it "credentials.json" (it's important to name that way for the rest of the app)

8. Don't forget to add it on your .gitignore for security reasons (if you don't have a gitignore, just create a file ".gitignore" at the root of the project, and write "credentials.json" in it), and your done !

## Installation

1. Clone the repository :
    ````
    https://github.com/TomToulonBogo/Good-Corner_backend.git
    ````
2. Install the application :
    ````
    npm install
    `````
3. Start the server
    ````
    npm run dev
    ````
