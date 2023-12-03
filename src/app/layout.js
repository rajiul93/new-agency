
import { Poppins } from 'next/font/google'
import './globals.css'
const fontPoppins = Poppins({
  subsets:['latin'],
  weight:["300","400","500","600","700"],
  variable:'--poppins'
})


export default function RootLayout({ children }) {
  return (
    <html className={fontPoppins.variable} lang="en">
      <body >{children}</body>
    </html>
  )
}
