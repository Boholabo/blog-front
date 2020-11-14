import React, { FC, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

const PcMain: FC<Props> = ({ children }) => {
  return (
    <div id="app-main">
      <Header />
      <main id="main" className="main-container">
        <div id="main-content" className="main-content">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PcMain;
