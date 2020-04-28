RegisterForm.js

This is a RegisterForm Component, it helps to render  user registration form and validate the user details by using simple java script validation. Lets see the complete source code.

Here we are storing the user fields details and error message in state.
1. fields: {} : Storing user details (i.e : Name, Mobile, Email and Password) from the user registration form.
2. errors: {} : Storing the error messages for different user fields and it helps to display error messages for different user fields by using state. 

Lets discuss about the functions :
1. handleChange(e) : This function helps to store user details in state (i.e : fields: {} ).
2. validateForm() : This is a core part of form validation. It helps to validate the user details for various fields present in user registration form and display the error message for corresponding fields if any.
3. submituserRegistrationForm(e) : This function validate the user details by calling validateForm() function and clear the user form details when user form details is valid.



Apart from above Form Error Message Validation, we have covered some other checkpoints or validation rules, Lets see the some more validation one by one.

Name Field : This field accept only valid user name, which include user First, Middle and Last name.
Email Field : This field accept only valid Email address of user.
Mobile Field : This field accept valid 10 digit mobile number of user.
Password Field : This field accept only accept user password details. This validation makes the user password very strong and which complies below format :
 Must be at least 8 characters
At least 1 special character from @#$%&
At least 1 number, 1 lowercase, 1 uppercase letter