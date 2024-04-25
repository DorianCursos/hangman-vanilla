import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  plugins: [ViteMinifyPlugin({}), ViteImageOptimizer({})],
  base: '',
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        howToPlay: resolve(__dirname, 'src/html/how-to-play.html'),
        category: resolve(__dirname, 'src/html/category.html'),
        game: resolve(__dirname, 'src/html/game.html'),
        // Añade aquí el resto de páginas que quieras.(nombre único: resolve(__dirname, 'src/html/archivo.html'))
      },
    },
    outDir: '../docs',
  },
});
