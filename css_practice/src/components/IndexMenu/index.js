import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

class IndexMenu extends Component {
  renderLinks(pages) {
    return pages.map((page, i) => {
      return (
        <div className="zzz index-tab-container" key={i}>
          <Link to={page.link} className="index-tab">
            <i className={`fa ${page.icon}`} aria-hidden="true" />
            <div className="index-tab-title">
              {page.title}
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    const pages = [
      { id: 1, title: 'About Me', icon: 'fa-user', link: 'about' },
      { id: 2, title: 'Projects', icon: 'fa-folder-open', link: 'projects' },
      { id: 3, title: 'CSS3', icon: 'fa-css3', link: 'css3' },
      { id: 4, title: 'Skills', icon: 'fa-wrench', link: 'skills' },
      { id: 5, title: 'Resume', icon: 'fa-file-text', link: 'resume' },
      { id: 6, title: 'Contact', icon: 'fa-envelope', link: 'contact' }
    ];

    return (
      <div className="zzz app-container">
        {this.renderLinks(pages)}
      </div>
    );
  }
}

export default IndexMenu;
