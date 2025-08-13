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
        // Brand colors
        navy: 'var(--color-navy)',
        teal: 'var(--color-teal)', 
        primary: 'var(--color-primary)',
        'light-blue': 'var(--color-light-blue)',
        'pale-blue': 'var(--color-pale-blue)',
        
        // Text colors
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-light': 'var(--color-text-light)',
        
        // Background colors
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        'bg-elevated': 'var(--color-bg-elevated)',
        
        // UI colors
        border: 'var(--color-border)',
        shadow: 'var(--color-shadow)',
        sider: 'var(--color-sider)',
        
        // Button colors
        'btn-primary': 'var(--color-btn-primary)',
        'btn-primary-hover': 'var(--color-btn-primary-hover)',
        'btn-secondary': 'var(--color-btn-secondary)',
        'btn-secondary-hover': 'var(--color-btn-secondary-hover)',
        
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
