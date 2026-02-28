import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';

/**
 * Transforms any import from the marketing/ads directory into a base64 data URI.
 * This makes images immune to ad-blocker ERR_BLOCKED_BY_CLIENT — data: URIs are
 * never blocked regardless of the original filename (e.g. "300x250", "/ads/").
 */
function inlineAdImagesPlugin(): Plugin {
  return {
    name: 'inline-ad-images',
    load(id) {
      // Only intercept files inside marketing/ads
      if (!id.includes('marketing/ads')) return;
      if (!/\.(jpe?g|png|gif|webp|svg)$/i.test(id)) return;

      try {
        const buf = fs.readFileSync(id);
        const b64 = buf.toString('base64');
        const ext = path.extname(id).replace('.', '').toLowerCase();
        const mime = ext === 'jpg' ? 'image/jpeg'
          : ext === 'jpeg' ? 'image/jpeg'
          : ext === 'png' ? 'image/png'
          : ext === 'gif' ? 'image/gif'
          : ext === 'webp' ? 'image/webp'
          : ext === 'svg' ? 'image/svg+xml'
          : 'application/octet-stream';
        return `export default "data:${mime};base64,${b64}";`;
      } catch {
        return null; // let Vite handle it normally if read fails
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), inlineAdImagesPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: ['.ngrok-free.app'],
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
