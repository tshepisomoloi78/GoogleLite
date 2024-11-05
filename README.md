# Google Search Clone

Welcome to your first project! 🎉 This is your chance to recreate a simplified version of Google’s search interface while adding your own touches. Follow the instructions below, and don’t forget to unleash your creativity along the way!

---

## Project Overview

This project involves building three main pages:
1. **Google Search (index.html)** - Your main search page.
2. **Google Image Search** - A dedicated page for image search.
3. **Google Advanced Search** - An advanced search page with additional query options.

These pages should mimic Google’s basic layout and functionality, so aim for a similar look and feel!

---

## Requirements

### Basic Structure and Navigation

1. **Pages**:
   - Your website should include three pages:
     - `index.html` for **Google Search**
     - A page for **Google Image Search**
     - A page for **Google Advanced Search**

2. **Navigation**:
   - On the **Google Search** page, include links in the upper-right corner to go to **Image Search** and **Advanced Search**.
   - On the **Image Search** and **Advanced Search** pages, add a link in the upper-right corner to go back to the **Google Search** page.

### Google Search Page (index.html)

1. **Search Bar and Button**:
   - Create a centered search bar with rounded corners.
   - Center the **Google Search** button below the search bar.

2. **Search Functionality**:
   - Allow users to type a query, click “Google Search,” and be taken to the Google search results for their query.

3. **I’m Feeling Lucky Button**:
   - Add an **I’m Feeling Lucky** button that directly takes the user to the first search result for their query.
   - Note: You may encounter a redirect notice from Google. This is normal.

### Google Image Search Page

1. **Search Bar and Button**:
   - Include a search bar where users can type a query.
   - Add a **Search** button that, when clicked, takes users to the Google Image search results page for their query.

### Google Advanced Search Page

1. **Advanced Search Options**:
   - Create input fields for:
     - **All these words**
     - **This exact word or phrase**
     - **Any of these words**
     - **None of these words**

2. **Layout**:
   - Stack all four options vertically, with the input fields left-aligned.

3. **Advanced Search Button**:
   - Style the **Advanced Search** button with blue background and white text.
   - When clicked, it should direct users to the search results page based on the query parameters.

### Styling and Aesthetics

- Your CSS should resemble Google’s minimalist style:
  - Clean, spacious design.
  - Rounded corners for input fields.
  - Consistent alignment and spacing.
- **Bonus Challenge**: Use `Flexbox` or `CSS Grid` to help with layout alignment.

---

## Optional Challenges for Extra Fun 🎉

If you’re looking for an extra challenge, consider adding one (or both) of the following features:

### 1. Dark Mode
   - **Automatic Dark Mode**: Detect the user's system theme and apply a dark theme if their system is set to dark mode.
   - **Dark Mode Toggle**: Add a button that allows users to manually switch between light and dark themes.
   - **CSS Tip**: Use CSS variables and the `prefers-color-scheme` media query for this feature.

### 2. Search Animation
   - Add a subtle hover animation to the search buttons on all pages. This could be a color change, scale, or shadow effect.
   - Experiment with animations to add a bit of flair without sacrificing simplicity.

---

## Useful References

Here are some links to help you along the way:

- **HTML Basics**: [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- **CSS Styling**: [CSS Basics on MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- **Flexbox Guide**: [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **CSS Grid Guide**: [CSS Tricks CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Dark Mode Tips**: [MDN prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

---

## Deployment Instructions

Once you’ve completed your project, it’s time to share it with the world! Follow these steps to deploy your website on GitHub Pages or Vercel:

### Option 1: Deploying on GitHub Pages

1. **Push Your Code**:
   - Make sure your code is pushed to your GitHub repository and organized in the `main` branch (or `master` if that’s the default).

2. **Enable GitHub Pages**:
   - Go to your GitHub repository.
   - Navigate to **Settings** > **Pages** in the sidebar.
   - Under **Source**, select the branch (`main` or `master`) and choose `/root` as the directory.
   - Click **Save**.

3. **View Your Site**:
   - GitHub will display a message with the URL where your site is live (usually `https://your-username.github.io/repo-name`).
   - **Note**: GitHub Pages might take a few minutes to publish.

4. **Share Your Link**:
   - Once published, share the link with the team or showcase it in the README file for easy access.

---

### Option 2: Deploying on Vercel

1. **Sign Up on Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign up with your GitHub account.

2. **Import Your GitHub Repository**:
   - After logging in, click **New Project** and select your GitHub repository.
   - Follow the prompts to authorize Vercel to access your repo.

3. **Configure Deployment**:
   - Vercel automatically detects static files, so no extra configuration is typically needed.
   - Click **Deploy** to start the deployment process.

4. **View and Share Your Site**:
   - Vercel will provide a live URL once the deployment is complete (usually in a format like `https://your-project.vercel.app`).
   - **Note**: This deployment is automatic, so any changes you push to the `main` branch will automatically update on Vercel.

---

## Extra Step (Optional): Update Your README

Include the live link in your README file under a "Live Demo" section, so anyone viewing the repo can access your deployed site directly.

---

Good luck, and may the creative force be with you! ✌️
