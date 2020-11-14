import React, { FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import PcMainView from '../components/layouts/pc/main';
import SpMainView from '../components/layouts/sp/main';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const isMobile = false;
  return (
    <RecoilRoot>
      <div id="app" className="theme">
        {isMobile ? (
          <SpMainView>{children}</SpMainView>
        ) : (
          <PcMainView>{children}</PcMainView>
        )}
      </div>
    </RecoilRoot>
  );
};

export default Layout;
