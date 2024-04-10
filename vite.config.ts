import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		base: mode === 'production' ? '/ecs-sharedarraybuffer-playground/' : '/',
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		plugins: [
			vue()
		],
	
		build: {
			assetsInlineLimit: 0
		},
		server: {
			port: 8080,
			host: '127.0.0.1',
			headers: {
				'Cross-Origin-Opener-Policy': 'same-origin',
				'Cross-Origin-Embedder-Policy': 'require-corp'
			}
		},

		optimizeDeps: {
			exclude: ['@daneren2005/shared-memory-objects']
		}
	};
});
