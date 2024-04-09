import { resolve } from 'node:path'

// vite.config.js
export default {
    server: {
        port: 5555
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                comprar: resolve('pages/comprar.html'),
                index: resolve('index.html'),
            }
        }
    }
}