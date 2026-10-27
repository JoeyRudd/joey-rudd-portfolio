import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// On GitHub Pages the site lives under /<repo-name>/, so production builds use that base.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig(({ mode }) => ({
  base: mode === 'production' && repo ? `/${repo}/` : '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        resume: resolve(import.meta.dirname, 'resume/index.html'),
        projects: resolve(import.meta.dirname, 'projects/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  },
}))
