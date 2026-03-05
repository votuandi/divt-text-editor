import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Entry point of your library
      entry: path.resolve(__dirname, 'src/components/DivtTextEditor/index.js'),
      name: 'DivtTextEditor',
      // The built file names
      fileName: (format) => `divt-text-editor.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies to prevent bundling them inside the library
      external: ['react', 'react-dom'],
      output: {
        // Global variables to use in the UMD build for externalized dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Ensure CSS is extracted properly (Vite handles this by default, but good to know)
      },
    },
  },
});