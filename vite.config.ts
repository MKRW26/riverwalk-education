import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // We add the curly braces {} here so 'const' is allowed
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // This 'base' line is CRITICAL for GitHub Pages to find your files
    base: '/riverwalk-education/',
  }
})
