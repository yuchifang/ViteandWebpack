import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs'
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "")
    return {

        plugins: [react(), commonjs(), visualizer({
            open: true
        })],
        build: {
            target: 'esnext',

            rollupOptions: {
                output: {
                    chunkFileNames: '[name]~[hash:6].js',
                    manualChunks(id, module) {
                        if (id.includes('xlsx.mjs')) {
                            return "xlsx"
                        }
                    }
                },
            }
        },
    }
});
