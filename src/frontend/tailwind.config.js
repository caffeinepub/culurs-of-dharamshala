import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        chart: {
          1: 'oklch(var(--chart-1))',
          2: 'oklch(var(--chart-2))',
          3: 'oklch(var(--chart-3))',
          4: 'oklch(var(--chart-4))',
          5: 'oklch(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))'
        },
        saffron: {
          50: '#FFF8F0',
          100: '#FDECD5',
          200: '#FAD5A0',
          300: '#F7BC6B',
          400: '#F4A261',
          500: '#E8843A',
          600: '#C96520',
          700: '#A04D18',
          800: '#7A3812',
          900: '#5A280D',
        },
        maroon: {
          50: '#FDF0F0',
          100: '#F9D5D5',
          200: '#F0A0A0',
          300: '#E06060',
          400: '#C03030',
          500: '#8B1A1A',
          600: '#6E1515',
          700: '#521010',
          800: '#380B0B',
          900: '#200606',
        },
        earth: {
          50: '#FAF5EE',
          100: '#F0E6D4',
          200: '#DFC9A8',
          300: '#C9A877',
          400: '#B08850',
          500: '#6B4226',
          600: '#543519',
          700: '#3E2711',
          800: '#2A1A0B',
          900: '#180F05',
        },
        parchment: '#FDF6E3',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(107, 66, 38, 0.12), 0 1px 2px rgba(107, 66, 38, 0.08)',
        'warm-md': '0 4px 12px rgba(107, 66, 38, 0.15), 0 2px 6px rgba(107, 66, 38, 0.10)',
        'warm-lg': '0 10px 30px rgba(107, 66, 38, 0.18), 0 4px 12px rgba(107, 66, 38, 0.12)',
        'warm-xl': '0 20px 50px rgba(107, 66, 38, 0.22), 0 8px 20px rgba(107, 66, 38, 0.15)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      }
    }
  },
  plugins: [typography, containerQueries, animate]
};
