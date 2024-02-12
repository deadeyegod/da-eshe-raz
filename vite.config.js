import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import image from '@rollup/plugin-image';

export default defineConfig({
    plugins: [react(), reactRefresh(), image() ]
    
});
