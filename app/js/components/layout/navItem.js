import React from "react";
 
export default class navitem extends React.Component {
  handleMouseClick(e, itemKey) {
    console.log(e, itemKey);
  }
  
  render() {
  	const { navobj } = this.props;  
    return ( 
      <li onClick={this.handleMouseClick.bind(this, this.props.navkey)}><i></i> {navobj.name}</li> 
    );
  }
}
