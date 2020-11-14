import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header id="header" className="header">
      <div className="header-container container">
        <div className="header-header">
          <img className="header-logo" alt="alt" />
          <a href="/" className="header-link" title="$i18n.text.slogan" />
        </div>
        <div className="header-player">
          <div className="panel">
            <button className="prev-song button">
              <i className="iconfont icon-music-prev" />
            </button>
            <button className="toggle-play button" />
            <button className="next-song button">
              <i className="iconfont icon-music-next" />
            </button>
            <button className="muted-toggle button">
              <i className="iconfont" />
            </button>
          </div>
          <div className="song">空</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
