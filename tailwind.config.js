/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			primary: "#3b82f6",
			secondary: "#ec4899",
			accent: "#F5F5F5",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate", "tailwind-scrollbar-hide")],
}

