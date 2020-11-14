import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Layout from '../layouts/layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
