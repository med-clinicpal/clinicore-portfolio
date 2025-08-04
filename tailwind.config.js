/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        sider: 'var(--color-sider)',
        widthChange: 'var(--sider-width)'
      },
      screens: {

        'xxsm': '360px', 
        'xsm': '400px', 
        '3xl': '1900px',
      },
      
    },
 
  },
  plugins: [],
};
