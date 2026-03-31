import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Actions sets GITHUB_REPOSITORY=owner/repo so Pages assets live under /repo-name/
// Only apply that base for production builds — otherwise local dev breaks if GITHUB_REPOSITORY is set in the environment.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' && repo ? `/${repo}/` : '/',
  plugins: [react(), tailwindcss()],
}))
