# Premium Developer Portfolio

A responsive, high-end, dark-mode-first developer portfolio website built using React, TypeScript, and Vite. Designed to showcase agricultural AI research, machine learning expertise, and full-stack software capabilities.

## 🚀 Getting Started

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Compiles static production assets to the `/dist` directory.

---

## 🌐 Deploying to GitHub Pages (Automatic)

We have configured a GitHub Actions workflow to automatically build and deploy your portfolio to GitHub Pages on every push.

### Step 1: Initialize Git and Push to GitHub

1. Initialize a new local Git repository (if not already initialized):
   ```bash
   git init
   ```

2. Add files and make your first commit:
   ```bash
   git add .
   git commit -m "feat: initial commit of redesigned portfolio"
   ```

3. Rename branch to `main`:
   ```bash
   git branch -M main
   ```

4. Link to your remote GitHub repository and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
### Step 2: Enable GitHub Actions Deployment on GitHub

1. Go to your repository page on **GitHub.com**.
2. Click on the **Settings** tab.
3. In the left navigation menu, click **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** (instead of "Deploy from a branch").

The deployment workflow will trigger automatically and build your site. You can track progress under the **Actions** tab on your repository page. Once finished, your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`!
