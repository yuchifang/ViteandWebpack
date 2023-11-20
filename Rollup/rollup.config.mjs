// rollup.config.mjs
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import css from "rollup-plugin-import-css";
import serve from 'rollup-plugin-serve'

export default {
    input: 'src/main.js',
    output:
        [
            {
                dir: "terserBuild",
                chunkFileNames: '[name]~[hash:6].min.js',
                format: "es",
                name: 'version',
                plugins: [terser(), html()],
                manualChunks(id, module, data) {
                    if (id.includes('new')) {
                        return "new"
                    }
                    if (id.includes('foo')) {
                        return "foo"
                    }
                }
            }
        ]
    ,
    plugins: [json(), css(), serve('terserBuild')]
};