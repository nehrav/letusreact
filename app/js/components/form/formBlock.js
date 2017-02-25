import React from "react"; 
 
export default class FormBlock extends React.Component {
  constructor() {
    super(); 

    this.state = { 
      keyValue: 'randomValue-' + new Date().getTime()
    };
  }

  handleChange(e) { 
    const fieldValue = (this.props.keyName == 'required' || this.props.keyName == 'disabled') ? e.target.checked : e.target.value; 
    this.props.collectFormRowValue(fieldValue, this.props.keyName); 

    this.setState({keyValue:fieldValue});
    console.log('formblock handlechange', fieldValue, this.props);
  } 

  updateOptions() {
    
  }

  render() { 
    let labelVal = this.props.keyData.name;
    const { keyValue } = this.state; 
    let inputWrap = (<input type="text" value={keyValue} onChange={this.handleChange.bind(this)} />); 

    if(this.props.keyName != 'required' || this.props.keyName != 'disabled') {
      //const fieldValue = 'test';
      //this.props.collectFormRowValue(fieldValue, this.props.keyName); 
    }

    if (this.props.keyData.type == 'checkbox') {
      labelVal = '';
      inputWrap = ( <div> <input type="checkbox" onChange={this.handleChange.bind(this)} /> {this.props.keyData.name} </div> );
    } else if (this.props.keyData.type == 'dropdown') { 
      const optionBlock = Object.keys(this.props.keyData.options).map((key, i) => <option key={i} name={key}>{this.props.keyData.options[key]}</option> ); 
      inputWrap = ( <select onChange={this.handleChange.bind(this)}>{optionBlock}</select> ); 
    } else if (this.props.keyData.type == 'formlist') { 
      const formBlock = Object.keys(this.props.keyData.options).map((key, i) => <div key={i}><input type="radio" value={key} /> <input type="text" onChange={this.updateOptions.bind(this)} value={this.props.keyData.options[key]} /></div> ); 
      inputWrap = ( <div className="radio-group" onChange={this.handleChange.bind(this)}> {formBlock} </div> );
    } else if (this.props.keyData.type == 'radio') { 
      const radioBlock = Object.keys(this.props.keyData.options).map((key, i) => <div key={i}><input type="radio" value={key} /> {this.props.keyData.options[key]}</div> ); 
      inputWrap = ( <div className="radio-group" onChange={this.handleChange.bind(this)}> {radioBlock} </div>);
    }  

  	console.log('XXXXXXXXXXXXX FormBlock = ', this.props);
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