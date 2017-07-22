import React from 'react';
import './style.css';

class AboutMe extends React.Component {
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
          About Me
        </div>
        <div className="zzz page-content">
          <div className="about">
            <div className="profile-pic"></div>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a voluptates 
              labore ad nam facere reiciendis error perferendis, quae, magni, harum ipsum 
              ipsam quasi dolor voluptas! Consequatur, veritatis? Repudiandae, nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a voluptates 
              labore ad nam facere reiciendis error perferendis, quae, magni, harum ipsum 
              ipsam quasi dolor voluptas! Consequatur, veritatis? Repudiandae, nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a voluptates 
              labore ad nam facere reiciendis error perferendis, quae, magni, harum ipsum 
              ipsam quasi dolor voluptas! Consequatur, veritatis? Repudiandae, nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a voluptates 
              labore ad nam facere reiciendis error perferendis, quae, magni, harum ipsum 
              ipsam quasi dolor voluptas! Consequatur, veritatis? Repudiandae, nihil.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat debitis 
              molestias voluptates velit enim veniam architecto, aut temporibus eligendi 
              dolorem at inventore dolor perspiciatis labore alias neque necessitatibus.
              Laudantium, amet? Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Tenetur unde possimus non repellendus a eaque, dolorem enim nemo excepturi 
              sunt eum rerum magnam accusantium similique hic facilis voluptatibus! Totam, 
              quis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
