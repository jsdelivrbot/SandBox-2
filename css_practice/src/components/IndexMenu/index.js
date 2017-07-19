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
      { id: 1, title: 'About Me' },
      { id: 2, title: 'Projects' },
      { id: 3, title: 'Resume' },
      { id: 4, title: 'Climbing' },
      { id: 5, title: 'CSS Elements' },
      { id: 6, title: 'Resume' }
    ];

    return (
      <div className="zzz app-container">
        {this.renderLinks(links)}
      </div>
    );
  }
}

export default IndexMenu;
