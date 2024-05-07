import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '700': '#4a5568', // Ensuring the grey theme used in global.css is defined
        },
        // Define any other colors used in global.css here
        background: '#ffffff',
        foreground: '#cccccc',
        card: '#dddddd',
        'card-foreground': '#eeeeee',
        popover: '#f1f1f1',
        'popover-foreground': '#333333',
        primary: '#0055ff',
        'primary-foreground': '#ffffff',
        secondary: '#f0f0f0',
        'secondary-foreground': '#222222',
        muted: '#f4f4f4',
        'muted-foreground': '#444444',
        accent: '#ffcc00',
        'accent-foreground': '#ffffff',
        destructive: '#ff4444',
        'destructive-foreground': '#ffffff',
        border: '#e2e2e2',
        input: '#fafafa',
        ring: '#5c67f2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;