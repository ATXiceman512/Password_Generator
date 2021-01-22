# Password_Generator

## URL to application
https://atxiceman512.github.io/Password_Generator/index.html

## Screenshots of application

### Screenshot of the UI
![Index.html(FrontEnd) screenshot](./assets/images/pw_generator_main.PNG "Main Password Generator Screenshot")

### Screenshot of Character Count
![Index.html(FrontEnd) screenshot](./assets/images/charCountScreenshot.PNG "Character Count")

#### Screenshot of Character Count Error
![Index.html(FrontEnd) screenshot](./assets/images/invalidCharacterCount.PNG "Invalid Character Count")

### Screenshot of No Character Selected
![Index.html(FrontEnd) screenshot](./assets/images/noCharSelectedError.PNG "No Character Type Selected")

### Screenshot of Successful PW generation
![Index.html(FrontEnd) screenshot](./assets/images/success.PNG "Success Message")

## USER STORY
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## ACCEPTANCE CRITERIA
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page