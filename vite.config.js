import { defineConfig } from 'vite'
// vite.config.js

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
});
