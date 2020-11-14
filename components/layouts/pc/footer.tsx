import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <span>Powered By</span>
        <a
          target="_blank"
          className="item"
          rel="noreferrer nofollow noopener"
          href="blog">
          blog
        </a>
        <span>
          <a
            target="_blank"
            className="item"
            rel="noreferrer nofollow noopener"
            href="https://boholabo.com">
            Boholabo
          </a>
          <a href="/about">Me</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
