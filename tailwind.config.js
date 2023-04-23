/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'ubuntu-mono': 'Ubuntu Mono'
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
