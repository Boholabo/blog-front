import { AppProps } from 'next/app'
import '../styles/index.css'
import {FC} from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
