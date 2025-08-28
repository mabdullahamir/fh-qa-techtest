# Cypress E2E Framework
This repository contains an end-to-end automation project using **Cypress** to automate the **end-to-end purchasing flow of a product**.


## 1. Prerequisites
To set up and run the project, make sure that the following are installed on your system:
- **Node.js** (v22.11.0 was used in this project. The currently supported Node.js versions for Cypress are Node.js 20, 22, 24, and above.)
- **npm** (comes with Node.js)
- **Cypress** (v14.0.0 was used in this project — v15.x is not stable and may cause issues)
- **Visual Studio Code** (Or a code editor of your choice)

>**Note**: It is recommended to stick with Cypress v14.x for stability.
>**Note**: Node.js versions 18 and 23 are no longer officially supported by Cypress, so it's better to have an LTS version from above.

## 2. Setup Instructions
To clone the repo and install Cypress, run the commands mentioned below in the terminal and follow the steps.
1. Clone the repository:
  ```
- git clone <repository-url>
- cd <your-project-name>
```

2. Install dependencies:
 ```
 - npm install
```

3. Open Cypress Test Runner (interactive mode):
  ```
   - npx cypress open
  ```
- After running the above command, a Cypress window will open, and then click on E2E Testing
- On the next step, it will ask to choose a browser, select Electron or Chrome, and click the Start E2E Testing button
- Now in Cypress Runner, you will be seeing main.cy.js. Click on it, and the test will start to execute.

4. Run Cypress tests in headless mode:
   ```
   - npx cypress run
   ```
- After running the above command, the test will start to run in a headless(non-GUI) mode, and you will be notified of it in the terminal.

## 3. Test Scenario
The automation covers an **end-to-end flow of purchasing a product** on [saucedemo.com](https://www.saucedemo.com/):

- Log in to the store
- Select a product and add to cart
- Remove product from cart and go back to inventory
- Select another product, add to cart, and proceed to checkout
- Complete the customer information
- Verify the Total
- Validate a successful message on order confirmation
- Access the sidepanel menu and Log out
  
The automation covers some **negative cases** on [saucedemo.com](https://www.saucedemo.com/):

- Login without credentials
- Log in with an invalid Username and Password
- Checking out without filling in the customer info

**Additionally**, tried to add a negative flow as checkout with an empty cart, which shouldn't be allowed; however, this constraint is not handled in the web-app
  

## 4. Design Pattern & Approach
- Implemented **Page Object Model (POM)** for maintainability and scalability.
- Test data managed using **fixtures** (`users.json`).
- Reusable selectors and commands are abstracted into page objects for readability.



## 5. To Do (If More Time Were Available)
- Add test cases for Login for the rest of the users
- Add test cases for multiple product purchases
- Add test cases for product validation, like its name, description, and price
- Add parameterized tests to reduce code duplication, such as testing multiple users from fixtures
- Improve test structure by moving more common steps into custom Cypress commands

---
This project demonstrates Cypress automation using modern best practices with a focus on readability, scalability, and maintainability.
