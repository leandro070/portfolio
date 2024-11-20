/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ["Bebas Neue"],
				body: ["Roboto"]
			},
			colors: {
				primary: "var(--color-white)",
				secondary: "var(--color-black)",
				accent: "var(--color-purple)",
				grey: "var(--color-grey)",
				['light-blue']: "var(--color-light-blue)"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
