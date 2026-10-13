# Star Creations Portfolio

## Live Website

https://kdogz9.github.io/PortfolioWebsite/

## About the site and its purpose

This website is a portfolio of work I have completed over the past three years of my university degree. It showcases my skills, projects I've worked on, my role within these projects and provides insight into who I am. 

The purpose of this website is to show future employers my skill set and examples of real projects I have worked on. It also allows them to understand more of who I am as a person as well. It also gives them the opportunity to contact me. 

## Code Documentation

The code documentation is generated automatically from a JavaScript file stored in the `src` folder.

The live documentation can be viewed here:

https://kdogz9.github.io/PortfolioWebsite/generated-docs/

It is also available on the website if you click on the `code documentation` button.
## Building the Documentation Locally

- First install the project dependencies:
```
npm install
```

- Then generate the JSDoc documentation:

``` 
npx jsdoc src -d generated-docs
``` 
The generated documentation will appear inside the `generated-docs` folder.
- Open `generated-docs/index.html` to view the documentation locally. 

## Deployment

The website is deployed automatically using GitHub Actions whenever changes are pushed to the `main` branch.

The workflow installs the project dependencies, generates the JSDoc documentation from the files in the `src` folder and then deploys the website and generated documentation to GitHub Pages.