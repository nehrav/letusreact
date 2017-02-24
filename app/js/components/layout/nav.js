import React from "react";
import NavItem from "./navItem"; 

export default class Nav extends React.Component {
  render() {
  	const { menu } = this.props;  
  	const navListArry = Object.keys(menu).map((objkey) => <NavItem key={objkey} navkey={objkey} navobj={menu[objkey]} /> );

    return (
      <ul className="navItems"> 
      	{navListArry}
      </ul>
    );
  }
}
