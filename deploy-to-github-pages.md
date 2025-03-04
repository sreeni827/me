# Deploying to GitHub Pages

This document provides instructions for deploying your portfolio website to GitHub Pages.

## Prerequisites

1. Create a GitHub repository for your portfolio
2. Push your code to the repository

## Deployment Steps

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows` directory in your project
2. Create a file named `deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

3. Push this file to your repository
4. GitHub Actions will automatically build and deploy your site

### Option 2: Manual Deployment

1. Build your project:
```bash
npm run build
```

2. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

3. Add a deploy script to your `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy your site:
```bash
npm run deploy
```

## Setting Up a Custom Domain (Optional)

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name and click Save
4. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`
5. Wait for DNS propagation (can take up to 24 hours)
6. Make sure the `CNAME` file in the `public` directory contains your custom domain

## Troubleshooting

- If your site is not displaying correctly, check that the `base` in `vite.config.ts` is set to `'./'`
- If your routes are not working, make sure you're using the `HashRouter` from React Router or implement a 404 redirect solution
- If assets are not loading, verify all paths are relative

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)