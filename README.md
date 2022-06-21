# Password Generator

## Description
GIVEN someone needs a new, secure password
WHEN they click the button to generate a password
THEN they are presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN they select which criteria to include in the password
WHEN prompted for the length of the password
THEN they choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN they confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN they answer each prompt
THEN input is validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is displayed in the return box on the page.

## Issues
1) Had to make sure that the password loop would continue until the password was the correct length.

2) Needed to correct when alphabetic array was returning the number placement of the random letter rather than the letter.

3) Had Git issues - I thought that I was committing to the GitHub repo but was only saving in the local repo. Figured it out when the project was done so there are not multiple commits to the GitHub repo.


## Screenshot
<img src="./Develop/GenScreenshot.png"/>


## Contact
Christina DuWors
christinaduwors@gmail.com
github.com/cduwors

GitHub Repository: https://github.com/cduwors/password

Deployed application: https://cduwors.github.io/password/



