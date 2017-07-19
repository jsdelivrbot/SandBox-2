import React from 'react';
import './style.css';

class SectionOne extends React.Component {
  renderMenus() {
    const iterators = [1, 2, 3, 4];
    return (
      <nav>
        <ul>
          {iterators.map((iterator, index) => {
            return (
              <li>
                style {iterator}
                <ul className={`drop-menu menu-${index}`}>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li>Item 5</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <div>
        <div className="zzz page-title">
          Drop Down Menus
        </div>
        <div className="zzz page-content">
          {this.renderMenus()}
        </div>
      </div>
    );
  }
}

export default SectionOne;
