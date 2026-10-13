# Task 2 - Dev log 

## Planning and Development (167 words)

I planned to make a portfolio website to show off my projects and provide a bit about me to future employers. I also wanted there to be a contact section as well. For the style of the website, I wanted to make it pink, purple and white to fit in with a girly pop theme which is my branding. 

I planned to use GitHub Pages and Actions to deploy the website and the automated documentation so that it constantly updated with the code and I was already familiar with it. 

Before starting this project, I was already comfortable with HTML, GitPages and Actions along with website design as I have been doing/using this for a few months now in other projects. 

I was however, less confident with coding CSS by myself and automated documentation. To overcome this I planned to learn CSS to be able to code it myself and I researched into automated documentation using JSDocs so I didn't have to maintain the code manually.

## Problems and Adaptations (241 words)

When making the website, I coded all of the HTML myself and used AI to teach me the CSS so that I could understand how to code it myself as well. I changed the design several times as I added more content because the original layout started to feel too cluttered.

At first, I wanted all of the content to stay on one page but as the website grew I decided to create a separate `projects.html` page. I kept a `Projects` section on the homepage and added a button which takes the viewer to the separate page where the projects can be displayed more clearly.

I also felt that the website started to look too similar in each section, so I changed the Skills section into three separate cards to break up the structure. I changed the fonts a few times to better fit the girly pop style and adjusted the spacing, images and layout to make the website feel more polished.

I had an issue when implementing the Projects page where it returned a 404 error. This was caused by the HTML file being named incorrectly, so I fixed the file name and updated the link.

I also created a .gitignore file for `node_modules` and `generated-docs` because these folders caused over 2,000 files to appear in Source Control.

Finally, I modified the GitHub Actions workflow so it installs the required dependencies and generates the documentation automatically before deploying the website.

## Process of website 
![Final game GIF]()
## Skills and Knowledge Gained (128 words)

Completing this project has taught me a number of new skills. I now feel more confident coding in CSS after learning how to use padding, margins, grids, hover states and media queries to make the website responsive on different screen sizes. 

I also gained a better understanding of how automated documentation works through JSDoc and how documentation comments can be turned into HTML pages. 

I learned more about npm, package.json, dependencies and why folders such as `node_modules` should not be committed to GitHub. I also improved my understanding of `.gitignore` and how GitHub Actions can be used to install dependencies, generate documentation and automatically deploy them along with the website.

 Overall, the project has helped me feel more confident working with both front-end development and automated workflows. 