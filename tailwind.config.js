//@ts-check

const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        white: '#F2F2F2F2',
        coinbase: { primary: '#4a6cee', diabled: '#192445' },
        primary: {
          DEFAULT: 'var(--ls-colors-primary, #E42575)',
          '50': 'var(--ls-colors-primary-50, #F8C8DC)',
          '100': 'var(--ls-colors-primary-100, #F6B6D1)',
          '200': 'var(--ls-colors-primary-200, #F192BA)',
          '300': 'var(--ls-colors-primary-300, #ED6EA3)',
          '400': 'var(--ls-colors-primary-400, #E8498C)',
          '500': 'var(--ls-colors-primary-500, #E42575)',
          '600': 'var(--ls-colors-primary-600, #A6335E)',
          '700': 'var(--ls-colors-primary-700, #881143)',
          '800': 'var(--ls-colors-primary-800, #930863)',
          '900': 'var(--ls-colors-primary-900, #6e0040)',
          'background': 'var(--ls-colors-backdrop, #3e1240)',
          'text': 'rgb(var(--ls-colors-primary-text, 255, 255, 255), <alpha-value>)',
          'text-muted': 'var(--ls-colors-primary-text-muted, #56617B)',
          'text-placeholder': 'var(--ls-colors-text-placeholder, #8C98C0)',
          'buttonTextColor': 'rgb(var(--ls-colors-actionButtonText, 255 255 255), <alpha-value>)',
          'logoColor': 'var(--ls-colors-logo, #FF0093)'
        },
        secondary: {
          DEFAULT: 'var(--ls-colors-secondary, #111D36)',
          '50': 'var(--ls-colors-secondary-50, #313C9B)',
          '100': 'var(--ls-colors-secondary-100, #2E3B93)',
          '200': 'var(--ls-colors-secondary-200, #232A70)',
          '300': 'var(--ls-colors-secondary-300, #202965)',
          '400': 'var(--ls-colors-secondary-400, #1C2759)',
          '500': 'rgb(var(--ls-colors-secondary-500, 22, 37, 70), <alpha-value>)',
          '600': 'var(--ls-colors-secondary-600, #14213E)',
          '700': 'rgb(var(--ls-colors-secondary-700, 17, 29, 54), <alpha-value>)',
          '800': 'rgb(var(--ls-colors-secondary-800, 15, 25, 47), <alpha-value>)',
          '900': 'var(--ls-colors-secondary-900, #0C1527)',
          '950': 'var(--ls-colors-secondary-900, #0B1123)',
          'text': 'rgb(var(--ls-colors-secondary-text, 171, 181, 209), <alpha-value>)',
        },
      },
      opacity: {
        '35': '.35',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      transitionProperty: {
        'height': 'height'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-in-down': 'fade-in-down 0.5s ease-in',
        'fadein': 'fadein 4s',
        'slide-in': 'slide-in 300ms',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blinking": "blink 1.1s step-end infinite",

        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'blink': {
          '0%': {
            color: 'transparent',
          },
          '50%': {
            color: 'white',
          },
          '100%': {
            color: 'transparent',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '20%': {
            opacity: '0.6',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-out': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
          // Tooltip
          "slide-up-fade": {
            "0%": { opacity: 0, transform: "translateY(6px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          "slide-down-fade": {
            "0%": { opacity: 0, transform: "translateY(-6px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      },
      boxShadow: {
        'widget-footer': '-1px -28px 21px -6px var(--ls-colors-secondary-900, #0C1527)',
        'card': '5px 5px 40px rgba(0, 0, 0, 0.2), 0px 0px 200px rgba(0, 0, 0, 0.43)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: '#FFF',
              textAlign: 'center',
            },
            h2: {
              color: '#FFF',
              textAlign: 'center',
            },
            h3: {
              color: '#FFF',
            },
            h4: {
              color: '#FFF',
            },
            h5: {
              color: '#FFF',
            },
            a: {
              color: theme('colors.primary.400'),
            },
            strong: {
              color: '#FFF'
            },
            blockquote: {
              color: '#FFF'
            }
          },
        }
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["hover", "focus", "disabled"],
      backgroundColor: ["disabled"],
      translate: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
      addVariant('focus-peer', '.focus-peer &')
      addVariant('wide-page', '.wide-page &')
    }),
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#E42575',
              '50': '#F8C8DC',
              '100': '#F6B6D1',
              '200': '#F192BA',
              '300': '#ED6EA3',
              '400': '#E8498C',
              '500': '#E42575',
              '600': '#A6335E',
              '700': '#881143',
              '800': '#930863',
              '900': '#6e0040',
              'background': '#3e1240',
              'text': '#abb5d1',
              'text-muted': '#56617B',
              'text-placeholder': '#8C98C0',
              'buttonTextColor': '#ffffff',
              'logoColor': '#FF0093'
            },
            secondary: {
              DEFAULT: '#111D36',
              '50': '#313C9B',
              '100': '#2E3B93',
              '200': '#232A70',
              '300': '#202965',
              '400': '#1C2759',
              '500': '#162546',
              '600': '#14213E',
              '700': '#111D36',
              '800': '#0F192F',
              '900': '#0C1527',
              '950': '#0B1123',
            },
          },

        },
      },
      themes: [
        {
          name: 'imxMarketplace',
          extend: {
            colors: {
              primary: {
                DEFAULT: '#2EECFF',
                '50': '#E6FDFF',
                '100': '#D1FBFF',
                '200': '#A8F7FF',
                '300': '#80F3FF',
                '400': '#57F0FF',
                '500': '#2EECFF',
                '600': '#00E8FF',
                '700': '#00ACBD',
                '800': '#007985',
                '900': '#00464D',
                'background': '#007985',
                'text': '#D1FBFF',
                'buttonTextColor': '#000000',
                'logoColor': '#ffffffff'
              },
              secondary: {
                DEFAULT: '#111D36',
                '50': '#313C9B',
                '100': '#2E3B93',
                '200': '#232A70',
                '300': '#202965',
                '400': '#1C2759',
                '500': '#162546',
                '600': '#14213E',
                '700': '#111D36',
                '800': '#0F192F',
                '900': '#0C1527',
                '950': '#0B1123',
              },
            },
          },
        },
        {
          name: 'ea7df14a1597407f9f755f05e25bab42',
          extend: {
            colors: {
              primary: {
                DEFAULT: '#80E2EB',
                '50': '#FFFFFF',
                '100': '#FFFFFF',
                '200': '#EAFAFC',
                '300': '#C6F2F6',
                '400': '#A3EAF1',
                '500': '#80E2EB',
                '600': '#50D7E3',
                '700': '#22C9D9',
                '800': '#1A9CA8',
                '900': '#136F78',
                '950': '#0F5960',
                'background': '#007985',
                'text': '#D1FBFF',
                'text-placeholder': '#C6F2F6',
                'buttonTextColor': '#000000',
                'logoColor': '#ffffffff'
              },
              secondary: {
                DEFAULT: '#2E5970',
                '50': '#C1D9E6',
                '100': '#B3D0E0',
                '200': '#96BFD4',
                '300': '#79ADC8',
                '400': '#5C9BBC',
                '500': '#224253',
                '600': '#39708D',
                '700': '#0F1D27',
                '800': '#224253',
                '900': '#162B36',
                '950': '#0E1B22',
              },
            },
          },
        }
      ]
    })
  ],
};
