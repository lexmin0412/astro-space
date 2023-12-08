import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	base: '/astro-space',
	site: 'https://lexmin0412.github.io/astro-space',
	build: {
		assetsPrefix: '/astro-space/'
	}
});
