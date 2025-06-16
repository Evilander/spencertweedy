# spencertweedy.com

## Why Is This Repository Public?

For fun! I want to let any curious people see how my website works. If you have suggestions, please let me know in a comment, email, or pull request.

## How It Works

*As of June 16, 2025*

The site is now generated from the `react-site` folder. A lightweight Ruby gem
named `jekyll-fake` copies those files into the `_site` directory during the
build. A small Node script copies the CSS so the pages can load it without
running PostCSS.

Previously the project used the full Jekyll pipeline with Liquid templates.
That setup is still in the repository history, but the build has been simplified
so everything runs entirely offline.

[Netlify](https://www.netlify.com/) watches this GitHub repository and automatically builds the site when there are new commits. Certain files, like 'netlify.toml' and '\_redirects' tell Netlify how to build the site.

I manage the site’s content with [Netlify CMS](https://www.netlifycms.org/), which is hosted and configured in the 'admin' folder.

I use [Umami](https://umami.is) to log anonymous, basic traffic data and no third party can access it.

## Copyright/license

I reserve all rights to the site and its contents.
