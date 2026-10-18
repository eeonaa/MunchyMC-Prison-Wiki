import { defineConfig } from 'vite'
import vitePluginBundleObfuscator from 'vite-plugin-bundle-obfuscator'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vitePluginBundleObfuscator({
            enable: true,
            autoExcludeNodeModules: true,
            threadPool: true,
            log: true,
            options: {
                compact: true,
                selfDefending: true,
                simplify: true,
                stringArray: true,
                identifierNamesGenerator: 'hexadecimal',
            },
        }),
    ],
    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
})
