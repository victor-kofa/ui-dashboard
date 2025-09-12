import localFont from 'next/font/local'

export const twkEverett = localFont({
  src: [
    {
      path: './fonts/TWKEverett-Regular-web.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-twk-everett',
  display: 'swap',
})