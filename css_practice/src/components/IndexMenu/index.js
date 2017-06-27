import React from 'react';
import { Link } from 'react-router';

import './style.css';

class IndexMenu extends React.Component {
  renderLinks(links) {
    return links.map((link, i) => {
      return (
        <div className="zzz index-tab-container" key={i}>
          <Link to={`/sections/${link.id}`} className="index-tab">
            <div className="index-tab-number">{link.id}</div>
            <div className="index-tab-title">
              {link.title}
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    const links = [
      { id: 1, title: 'Section' },
      { id: 2, title: 'Section' },
      { id: 3, title: 'Section' },
      { id: 4, title: 'Section' },
      { id: 5, title: 'Section' },
      { id: 6, title: 'Section' }
    ];

    return (
      <div className="zzz app-container">
        <div className="zzz index-title">
          Index
        </div>
        {this.renderLinks(links)}
      </div>
    );
  }
}

export default IndexMenu;
