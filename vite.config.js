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
                carrito: resolve('pages/carrito.html'),
                contacto: resolve('pages/contacto.html'),
                nosotros: resolve('pages/nosotros.html'),
                index: resolve('index.html')
            }
        }
    }
}