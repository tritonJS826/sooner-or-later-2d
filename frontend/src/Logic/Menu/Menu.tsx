import React from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import './Menu.css';

// interface MenuProps {

// }
/*
 * Menu
 */
const Menu: React.FC = () => (
  <div className="menu">
    <div className="buffer" />
    <h2>Main Menu</h2>
    <ul>
      <ElementsMenu text="Singleplayer" />
      <ElementsMenu text="Multiplayer" />
      <ElementsMenu text="Option" />
      <ElementsMenu text="About" />
      <ElementsMenu text="Authorization" />
    </ul>
  </div>
);

export default Menu;
