/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"c-lexend": ["Lexend Deca", "sans-serif"],
				"c-bigShoulders": ["Big Shoulders Display", "sans-serif"]
			},
			colors: {
				"c-orange": "hsl(31, 77%, 52%)",
				"c-darkCyan": "hsl(184, 100%, 22%)",
				"c-veryDarkCyan": "hsl(179, 100%, 13%)",
				"c-transpWhite": "hsla(0, 0%, 100%, 0.75)",
				"lightGray": "hsl(0, 0%, 95%)",
			},

		},
	},
	plugins: [],
}
