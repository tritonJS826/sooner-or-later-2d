import React from 'react';
// import ElementsMenu from '../../Components/ElementsMenu/ElementsMenu';
// import infoPages from '../Pages';

import './Menu.css';

// interface IMenu {

// }
/*
 * Menu
 */
const Menu: React.FC = () => (
  <div id="menu">
    <div className="buffer" />
    <h2>Main Menu</h2>
    <ul>
      {/* <ElementsMenu path={infoPages.singleplayer.path} title={infoPages.singleplayer.title} />
      <ElementsMenu path={infoPages.multiplayer.path} title={infoPages.multiplayer.title} />
      <ElementsMenu path={infoPages.option.path} title={infoPages.option.title} />
      <ElementsMenu path={infoPages.about.path} title={infoPages.about.title} />
      <ElementsMenu path={infoPages.auth.path} title={infoPages.auth.title} /> */}
    </ul>
  </div>
);

export default Menu;
