module.exports = {
  mode: 'jit',
  purge: {
    content: ['./components/**/*.vue', './components/**/*.html', './layouts/*.vue', './pages/**/*.vue', './pages/**/*.html', './pages/**/**/*.vue', './pages/**/**/*.html', './node_modules/@kompas/ui/src/components/**/*.vue'],
    whitelist: ['blue-royal'],
  },
  theme: {
    screens: {
      mobileS: '360px',
      // => @media (min-width: 320px) { ... }
      mobileSM: '375px',
      mobileM: '480px',
      // => @media (min-width: 425px) { ... }
      mobileL: '640px',
      // => @media (min-width: 640px) { ... }
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      laptop: '960px',
      // => @media (min-width: 960px) { ... }
      laptopM: '1024px',
      // => @media (min-width: 1024px) { ... }
      laptopL: '1280px',
      // => @media (min-width: 1280px) { ... }
      desktopL: '1440px',
      // => @media (min-width: 1440px) { ... }
      desktopFullHD: '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      /**
       * Di bawah ini adalah warna lama
       * Kalau ada kesamaan dengan warna baru, hapus saja
       * warna lama lalu nama kelas yg memakai warna lama
       * diganti dengan nama kelas dengan warna baru.
       */
      black: '#000',

      // login component
      googleTextColor: '#666666',
      customTextColor: '#333333',
      errorTextColor: '#D00D12',
      kompasGrey: '#999999',
      kompasLightGrey: '#DDDD',

      'blue-royal': {
        10: '#E1F0FF',
        50: '#0468CB',
        60: '#0356A8',
        100: '#E9F5FD',
        200: '#C8E6F9',
        300: '#A6D6F6',
        400: '#42A8EB',
        500: '#2196F3',
        600: '#0C81DF',
        700: '#00599A',
        800: '#004C83',
        900: '#003E6C',
      },

      gray: {
        10: '#fefefe',
        50: '#eeeeee',
        100: '#dddddd',
        150: '#cccccc',
        300: '#999999',
        450: '#666666',
        500: '#444444',
        600: '#333333',
        650: '#222222',
        700: '#111111',
      },

      'green-lima': '#6ac322',

      'orange-tangerine': {
        100: '#FCF0C3',
        200: '#F9E79F',
        300: '#F7DD74',
        400: '#F4CF3A',
        500: '#F1C40F',
        600: '#FFB12E',
        700: '#FFA000',
        800: '#FF7F0F',
        900: '#EE7721',
      },

      'red-thunderbird': {
        100: '#FDF6F6',
        200: '#F5C6C7',
        300: '#EFA3A6',
        400: '#E98184',
        500: '#E35E63',
        600: '#DD3C41',
        700: '#D71920',
        800: '#B7151B',
        900: '#971216',
      },

      white: '#fff',
      'white-citrine-darker': '#f5e4bb',
      'white-citrine-dark': '#f7e9c8',
      'white-citrine': '#faf2de',
      'white-citrine-light': '#fdfbf4',

      /**
       * Di bawah ini adalah warna baru
       */
      brand: {
        1: '#00559A',
        2: '#00447B',
      },
      blue: {
        100: '#E1F0FF',
        200: '#93C8FD',
        300: '#5AABFC',
        400: '#057DF4',
        500: '#0468CB',
        600: '#0356A8',
        700: '#023B73',
      },
      // nama key dobel, sementara dikomen dulu sampai warna lama dihapus
      // 200-600 ada kesamaan dengan gray 50-600, akan di cek next task
      grey: {
        30: '#DDDDDD',
        40: '#999999',
        50: '#666666',
        100: '#FFFFFF',
        200: '#EEEEEE',
        400: '#999999',
        500: '#666666',
        600: '#333333',
        700: '#000000',
      },
      green: {
        10: '#EEFCD2',
        50: '#50A718',
        60: '#3A8C11',
        100: '#EEFCD2',
        200: '#D9F9A6',
        300: '#97DB53',
        400: '#6AC322',
        500: '#50A718',
        600: '#3A8C11',
        700: '#1A5D06',
      },
      orange: {
        10: '#FFEECC',
        40: '#FF7A00',
        100: '#FFEECC',
        200: '#FFD999',
        300: '#FFA53F',
        400: '#FF7A00',
        500: '#DB5D00',
        600: '#B74400',
        700: '#7A2100',
      },
      red: {
        10: '#FEE1CF',
        100: '#FEE1CF',
        200: '#FDBDA0',
        300: '#F7644C',
        400: '#F32013',
        500: '#D00D12',
        600: '#AE091B',
        700: '#740322',
      },
      yellow: {
        100: '#FFF9CC',
        200: '#FFF099',
        300: '#FFDC3F',
        400: '#FFCC00',
        500: '#DBAA00',
        600: '#B78B00',
        700: '#7A5700',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      6.5: '1.68rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      13.8: '3.8rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      24.4: '6.4rem',
      31: '7rem',
      31.5: '7.5rem',
      31.8: '7.85rem',
      32: '8rem',
      33: '8.7rem',
      36: '9rem',
      37: '9.75rem',
      40: '10rem',
      41: '10.625rem',
      44: '11rem',
      45: '11.26rem',
      46: '11.9rem',
      48: '12rem',
      50: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      68: '17rem',
      72: '18rem',
      76: '19rem',
      80: '20rem',
      81: '21rem',
      83: '22rem',
      84: '22.5rem',
      85: '23rem',
      96: '24rem',
      97: '26.5rem',
      105: '29.75rem',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      8: '8px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      serif: ['Lora', 'serif'],
      system: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      sans: ['PT Sans', 'Arial', 'Verdana', 'Helvetica', 'sans-serif'],
      chronicle: ['Chronicle Display', 'serif'],
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem', // 60.625rem
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%',
    },
    minHeight: {
      0: '0',
      7: '7rem',
      8: '8rem',
      82: '82px',
      320: '320px',
      full: '100%',
      screen: '100vh',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      90: '0.9',
      100: '1',
    },
  },
}
