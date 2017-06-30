import React from 'react';
import { Link } from 'react-router';

import AppHeader from './AppHeader';
import IndexMenu from './IndexMenu';
import './style.css';

export default ({ children }) => {
  return (
    <div className="zzz container">
      <AppHeader />
      <div className="zzz app-body">
        <div className="zzz index-container">
          <IndexMenu />
        </div>
        <div className="zzz content-container">
          {children}
          <a href="http://www.tom-ogasawara.com/paul" className="paul" />
        </div>
      </div>
    </div>
  );
};
