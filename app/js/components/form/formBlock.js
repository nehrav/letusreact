import React from "react"; 
 
export default class FormBlock extends React.Component {
  render() {  
  	console.log('FormBlock = ', this.props);
    return ( 
      <div className="form-group">
        <label>label to print</label>
        <div className="input-wrap">
          <input type="text" />
        </div>
      </div> 
    );
  }
}