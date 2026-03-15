/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          secondary: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.700'),
              a: {
                color: theme('colors.primary.600'),
                '&:hover': {
                  color: theme('colors.primary.800'),
                },
              },
              h1: {
                color: theme('colors.gray.900'),
              },
              h2: {
                color: theme('colors.gray.900'),
              },
              h3: {
                color: theme('colors.gray.900'),
              },
              h4: {
                color: theme('colors.gray.900'),
              },
              code: {
                color: theme('colors.secondary.600'),
                backgroundColor: theme('colors.gray.100'),
                borderRadius: theme('borderRadius.md'),
                paddingLeft: theme('spacing.1'),
                paddingRight: theme('spacing.1'),
              },
            },
          },
        }),
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'fade-in-up': 'fadeInUp 0.5s ease-out',
          'slide-in-right': 'slideInRight 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  };