# Visit Counter (Next.js)

A minimal Next.js application designed for auto-deployment to Vercel via GitHub, featuring a 90s-style hit counter.

## Vercel Setup Guide

Follow these steps to deploy and enable the visit counter:

1.  **Push to GitHub**:
    - Create a new repository on GitHub.
    - Push this code to the `main` branch.

2.  **Import to Vercel**:
    - Log in to [Vercel](https://vercel.com).
    - Click **"Add New..."** -> **"Project"**.
    - Import your GitHub repository.
    - Vercel will automatically detect Next.js settings. Click **"Deploy"**.

3.  **Enable Visit Counter (Vercel KV)**:
    - Once deployed, go to the project dashboard in Vercel.
    - Click on the **"Storage"** tab.
    - Click **"Create Database"** and select **"KV"**.
    - Follow the prompts to create the database (Redis).
    - Once created, click **"Connect"** and select your project.
    - This will automatically inject the `KV_URL`, `KV_REST_API_URL`, etc., environment variables into your project.
    - **Re-deploy** your project (or push a small change) to pick up the new environment variables.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

*Note: The visit counter will fail gracefully (show 0) unless you provide KV environment variables in a `.env.local` file.*

## 90s Style
This site uses classic 90s web aesthetics:
- "Times New Roman" font.
- "Under Construction" GIF.
- Double-bordered main container.
- Monospaced, glow-in-the-dark hit counter.
