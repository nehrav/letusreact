import React from "react"; 
 
export default class FormBlock extends React.Component {
  handleChange(e) {
    console.log('eeeeeeeeeeee =', e.target.checked);
    const fieldValue = e.target.checked || e.target.value; 
    console.log('ffffffff = ', fieldValue);
    this.props.collectFormRowValue(fieldValue, this.props.keyName); 
    // console.log('formblock handlechange', fieldValue, this.props.formobjkey);
  } 

  render() { 
    let labelVal;
    let inputWrap;
    if (this.props.keyData.type) {
      labelVal = '';
      inputWrap = ( <div> <input type="checkbox" onChange={this.handleChange.bind(this)} /> {this.props.keyData.name} </div> );
    } else {
      labelVal = this.props.keyData.name;
      inputWrap = (<input type="text" value={this.props.keyValue} onChange={this.handleChange.bind(this)} />);
    } 

  	// console.log('XXXXXXXXXXXXX FormBlock = ', this.props);
    return ( 
      <div className="form-group">
        <label>{labelVal}</label>
        <div className="input-wrap">
          {inputWrap}
        </div>
      </div> 
    );
  }
}