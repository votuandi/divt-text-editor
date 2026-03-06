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
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Externalize peer dependencies and all dependencies to prevent bundling them inside the library
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@tiptap\//,
        'lucide-react'
      ],
      output: {
        // Global variables to use in the UMD build for externalized dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        // Preserve module structure for better tree-shaking
        preserveModules: false,
        // Ensure proper exports for ESM
        exports: 'named'
      },
    },
    // Use esbuild for minification (faster and doesn't require terser)
    minify: 'esbuild',
    sourcemap: true,
    // Ensure CSS is properly extracted
    cssCodeSplit: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});