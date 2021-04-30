# Waracle Front-end Code test  notes

Solution is deployed to : https://light-stick.surge.sh/

The solution consists of two main folders

* Feature : which contains all the feature screens

* Core : contains code that will be used across the solution.

- All the code the interact with the Cat Api is encapsulated in api>agent.ts which is a wrapper around axios library.
- I used Mobx for state management. All the stores are in core>stores folder.
- The solution is developed using Typescript
- I used Formik and Yup for the forms management and validation
- I used TailwindCSS to style the application.
- I would have added unit tests if I've had extra time.
- API Key in .env.development wouldn't be checked in the code repo normally, but just added it for ease running it for people evaluating the test.
- The Cat API requires sometime to start counting the sent votes for newly added images. This means that for -new images only- won't have a score. 

![Landing page](https://raw.githubusercontent.com/Mokhalil/waracle-fe-challenge/master/Waracle_Coding_Test.png)
![iphone view](https://raw.githubusercontent.com/Mokhalil/waracle-fe-challenge/master/Sizzy-iPhone%2012%20localhost%2030Apr%2008.27.png)
![small screen](https://raw.githubusercontent.com/Mokhalil/waracle-fe-challenge/master/Sizzy-Small%20localhost%2030Apr%2008.26.png)
