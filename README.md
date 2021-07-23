# formExercise
Coding Exercise. Create a form.
Created using HTML, SCSS and JaveScript.

The form is set up and performs all requirements as detailed in the brief. Additionally, the email and password inputs were made to be required fields to ensure the form could not be submitted with these inputs left blank.

Given more time I would improve the responsiveness of the page, and reduce duplicate CSS code and tidy up the CSS file. I considered adding additional interactive elements like altering background colors based on the favourite color response, too. 

Form created with accessability in mind, each input has a corresponding label, groups of inputs are wrapped in a fieldset element. Semantic HTML used throughout. 
 
JavaScript is used to toggle the tiger text box on and off depending on the tiger checkbox state. Additionally I toggled the required attribute on and off in the same function to ensure the form can still be submitted when the textbox is set to display:"none". I utilized the if else conditional and the ternery operator within the function to toggle the required code. Creating the tigerSelector variable in the global scope allowed me to call the addEventListener and to pass the toggle function onto it.

For the styling I kept it simple using a single font from google fonts, plain colors with high transparency used for body background color and the form container background color with dark blues used for the fonts and bordes to add sufficient contrast to the page while maintaining consistent colors throughout. 
