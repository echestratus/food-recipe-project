import "@/styles/globals.css";
import localFont from 'next/font/local'

const airBnb = localFont({ 
  src: '../../public/fonts/AirbnbCereal_W_Md.otf', 
  variable: '--font-airbnb',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${airBnb.variable}`}>
        <Component {...pageProps} />
    </main>
  );
}
