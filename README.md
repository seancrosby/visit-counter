# Visit Counter (Next.js)

A minimal Next.js application designed for auto-deployment to Vercel via GitHub, featuring a 90s-style hit counter.

## Vercel Setup Guide

### 1. Automated Deployment (GitHub Actions)

This project is configured for automated deployment via GitHub Actions.

1.  **Repository Secrets**: Add the following secrets to your GitHub repository (**Settings > Secrets and variables > Actions**):
    - `VERCEL_TOKEN`: Your Vercel Personal Access Token.
    - `VERCEL_ORG_ID`: Your Vercel Organization ID.
    - `VERCEL_PROJECT_ID`: Your Vercel Project ID.

2.  **Deployment**: Once configured, pushes to the `main` branch will automatically trigger a production deployment.

### 2. Enable Visit Counter (Redis)

1.  **Create Redis Database**:
    - Go to the project dashboard in [Vercel](https://vercel.com).
    - Navigate to the **"Storage"** tab and click **"Create Database"** -> **"Redis"** (via Upstash).
    - Follow the prompts to create the database.

2.  **Link to Project**:
    - Click **"Connect"** and select your project.
    - This automatically injects the required environment variables (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, etc.).

3.  **Finalize**:
    - If you are using automated deployment, ensure the secrets are set correctly, then trigger a redeploy from your GitHub repository to pick up the new environment configuration.



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
