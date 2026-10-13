# Setup and Deployment

## GitHub Actions Workflow

The website uses GitHub Actions to automatically deploy the portfolio and generate the code documentation.

The workflow file is located in:

`.github/workflows/pages.yml`

Whenever changes are pushed to the `main` branch, the workflow runs automatically.

**The workflow completes the following steps:**

1. Checks out the files from the GitHub repository.
2. Sets up Node.js.
3. Installs the project dependencies using `npm ci`.
4. Creates a clean `_site` folder for deployment.
5. Generates the JSDoc documentation from the JavaScript files inside the `src` folder.
6. Places the generated documentation inside `_site/generated-docs`.
7. Uploads the completed website as a GitHub Pages artifact.
8. Deploys the site to GitHub Pages.

This means the documentation does not need to be generated and uploaded manually each time the source code changes.

## GitHub Pages Setup

GitHub Pages is enabled through the repository settings.

The site is deployed using GitHub Actions rather than directly from a branch.

To enable this:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.

Once the workflow has successfully completed, the portfolio is available at:

https://kdogz9.github.io/PortfolioWebsite/

The name of the website is determined by the name of your repository.

## Generated Documentation

The generated documentation appears on the live site at:

https://kdogz9.github.io/PortfolioWebsite/generated-docs/

The documentation can also be accessed using the **Code Documentation** button on the portfolio website.

