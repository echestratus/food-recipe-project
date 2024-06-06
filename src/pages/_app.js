import { store, wrapper } from "@/configs/redux/store";
import "@/styles/globals.css";
import localFont from 'next/font/local'
import { Provider } from "react-redux";

const airBnb = localFont({ 
  src: '../../public/fonts/AirbnbCereal_W_Md.otf', 
  variable: '--font-airbnb',
})

function App({ Component, pageProps }) {
  return (
    <main className={`${airBnb.variable}`}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}

export default wrapper.withRedux(App)
