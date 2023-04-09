# Movie with login


Welcome, welcome, welcome! So you've stumbled upon our little corner of the internet, eh? Well, congratulations and thank you.
This is part of a small project to build a FRONTEND web porfolio.


[DEMO HERE](https://movie-with-login.vercel.app/login)

 # Getting started

You can clone or download this repo and using

`yarn install`

`yarn dev` 
 
 
 or
 
 `npm install`
 
 `npm run start`
 


## Features

The main feature at the moment is the auth system using Firebase as platform to get a backend service working with all the features incorporated.

Using the Firebase Auth services, as user you can:

- Create an account
- Loggin using the email and password
- Reset your password typing the email.

As is still work in progress, does not have any page available apart of the login flow. 

## Some insigth

You can create the account if you want to test it but you can user the following user to login 

email: test@test.com
password: testing123


Once you are logged in you will access to the Home page (a blank page) where,

The avatar icon will display the Initial of your email with a small menu where you can open by clicking it to access to the user settings, being able to see the user email and a button to logout.


### Creating an account

The default page is the "/login" where the user will see the inputs field for email and password, but to create an account, should click on the bottom right of the form where is a link to the create account page.
This page is the same one but with a new input field to confirm the password typed in the previous input field.


As part of the firebase service response, to create an account you should provide an valid email and password with at least 8 words lenght.

The only UI restricction that the app have at the momment is the user should match the password and confirmation password field, where the user will see the helper text in red describing the error.

All the other error displayed are from responses from the Auth service when this return an error and using a function to transform the error to a readable string message.

After creating the account, you automaticaly will be logged in.


### Logging out

To log out, the user should access to the logout button under the avatar icon menu. That will clean up the user object and redirecting it to the login page again.

### Logging in

After creating an account or using the one described above, you can type your email and password to loggin in and redirect to the home page.

If something fails, the user will see a helper text in red describing the error (wrong password, user don't found, etc) 


### Reset password

Other feature added is the one to reset the user password.
In the bottom left of the form page is a button to change to the reset password page (under "/reset") where the user can type the email and submit.

Again, if the response has an error message will be displayed with a helper text, otherwise will be redirect to "/reset-success" that is a success page where you can return to the login page.



# Next steps

It will be nice to have other login options apart of the email/password like using Google/Facebook/Twitter/Twitch accounts.

Implement a movie discovery app using [The Movie Database API](https://www.themoviedb.org/) or something similar with some new IA tool like ChatGPT 

Testing: The test are missing but will be implemented a mock response api using MSW (mock service worker) to have an replicable and faster test suit.

PWA: I love the idea of having a native-like app just adding some config file <3


# Grettings

Any suggtion or comment are welcome.



Best, Martín.






