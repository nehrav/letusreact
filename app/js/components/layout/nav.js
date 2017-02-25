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
  	const navListArry = Object.keys(menu).map((objkey) => <NavItem key={objkey} navkey={objkey} navobj={menu[objkey]} addCanvasItemsArray={this.addCanvasItemsArray.bind(this)} /> );

    return (
      <ul className="navItems"> 
      	{navListArry}
      </ul>
    );
  }
}
