import React from "react";
import NavItem from "./navItem"; 

export default class Nav extends React.Component {
	addCanvasItemsArray(key) { 
    const { canvasFormFields } = this.props; 
    canvasFormFields.push(key);
    this.props.updateCanvasItems(canvasFormFields);
  }

  render() {
  	const { menu } = this.props; 
    const menuKeys = Object.keys(menu); 
    if(this.props.canvasFormFields.indexOf('pageheader') != -1)
      menuKeys.splice(menuKeys.indexOf('pageheader'), 1);
  	const navListArry = menuKeys.map((objkey) => <NavItem key={objkey} navkey={objkey} navobj={menu[objkey]} addCanvasItemsArray={this.addCanvasItemsArray.bind(this)} /> );

    console.log('navListArry = ', navListArry, Object.keys(menu));
    return (
      <ul className="navItems"> 
      	{navListArry}
      </ul>
    );
  }
}
