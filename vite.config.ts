import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	build: {
		sourcemap: true,
		outDir: 'dist-ui'
	},
	server: {
		port: 3001,
		strictPort: true,
		watch: {
			ignored: ['**', '!src/renderer/**']
		}
	},
});
