import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // <-- set port to 3000
    strictPort: true, // <-- will throw an error if 3000 is already in use
  },
});
