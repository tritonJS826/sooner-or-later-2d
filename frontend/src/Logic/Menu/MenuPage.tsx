import React from 'react';
import ElementsMenu from 'Components/ElementsMenu/ElementsMenu';
import './Menu.css';

/*
 * Menu
 */
const Menu: React.FC = () => (
  <div className="menu">
    <div className="buffer" />
    <h2>Main Menu</h2>
    <ul>
      <ElementsMenu path="/" text="SinglePlayer" />
      <ElementsMenu path="/" text="Multiplayer" />
      <ElementsMenu path="/" text="Option" />
      <ElementsMenu path="/" text="About" />
      <ElementsMenu path="/" text="Authorization" />
    </ul>
  </div>
);

export default Menu;
