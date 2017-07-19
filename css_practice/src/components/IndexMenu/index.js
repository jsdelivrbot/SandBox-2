import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

class IndexMenu extends Component {
  renderLinks(links) {
    return links.map((link, i) => {
      return (
        <div className="zzz index-tab-container" key={i}>
          <Link to={`/sections/${link.id}`} className="index-tab">
            <i className={`fa ${link.icon}`} aria-hidden="true"></i>
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
      { id: 1, title: 'About Me', icon: "fa-user" },
      { id: 2, title: 'Projects', icon: "fa-folder-open" },
      { id: 3, title: 'CSS3', icon: "fa-css3" },
      { id: 4, title: 'Skills', icon: "fa-wrench" },
      { id: 5, title: 'Resume', icon: "fa-file-text" },
      { id: 6, title: 'Contact', icon: "fa-envelope" }
    ];

    return (
      <div className="zzz app-container">
        {this.renderLinks(links)}
      </div>
    );
  }
};

export default IndexMenu;
