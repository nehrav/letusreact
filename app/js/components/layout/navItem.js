import React from "react";
 
export default class navitem extends React.Component {
  addFieldToCanvas(key) { 
    this.props.addCanvasItemsArray(key);
  }
  
  render() {
  	const { navobj } = this.props;  
    return ( 
      <li onClick={this.addFieldToCanvas.bind(this, this.props.navkey)}><i className="icon icon-"></i> {navobj.name}</li> 
    );
  }
}
