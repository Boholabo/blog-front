import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PcMain: FC<Props> = ({ children }) => {
  return (
    <div id="app-main">
      <main id="main" className="main-container">
        <div id="main-content" className="main-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PcMain;
