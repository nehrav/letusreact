import React from "react"; 
 
export default class FormBlock extends React.Component {
  constructor() {
    super(); 

    this.state = { 
      keyValue: 'default-' + new Date().getTime()
    };
  }

  handleInputFieldChanges(e) { 
    const fieldValue = (this.props.keyName == 'required' || this.props.keyName == 'disabled') ? e.target.checked : e.target.value; 
    this.props.collectFormRowValue(fieldValue, this.props.keyName); 

    this.setState({keyValue:fieldValue});
    // console.log('formblock handleInputFieldChanges', fieldValue, this.props);
  }  

  componentWillMount() {
    // if(this.props.keyName == 'name') {
    //   this.setState({keyValue: 'test'});
    //   console.log('componentWillMount formblock here', this.state.keyValue, this.props);  
    // }

    let fieldValue = (this.props.keyName == 'name') ? this.state.keyValue : (this.props.keyName == 'required' || this.props.keyName == 'disabled') ? false : '';
    if(this.props.keyName == 'listType')
      fieldValue = 'single';
    if(this.props.keyName == 'view')
      fieldValue = 'inline';

    this.setState({keyValue:fieldValue});
    this.props.collectFormRowValue(fieldValue, this.props.keyName); 
  }

  render() { 
    // console.log('FormBlock props = ', this.props); 
    let labelVal = this.props.keyData.name; 
    let inputWrap;

    if(this.props.keyName == 'name')
      inputWrap = (
        <input 
          type="text" 
          value={this.state.keyValue} 
          onChange={this.handleInputFieldChanges.bind(this)} />
      ); 
    else 
      inputWrap = (
        <input 
          type="text" 
          onChange={this.handleInputFieldChanges.bind(this)} />
      ); 

    if (this.props.keyData.type == 'checkbox') {
      labelVal = '';
      inputWrap = ( 
        <div> 
          <input
            name=""
            type="checkbox"
            checked={this.state.keyValue}
            onChange={this.handleInputFieldChanges.bind(this)} /> 
          {this.props.keyData.name} 
        </div> 
      );
    } else if (this.props.keyData.type == 'dropdown') { 
      const optionBlock = Object.keys(this.props.keyData.options).map((key, i) => <option key={i} name={key}>{this.props.keyData.options[key]}</option> ); 
      inputWrap = ( 
        <select onChange={this.handleInputFieldChanges.bind(this)}>
          {optionBlock}
        </select> 
      ); 
    } else if (this.props.keyData.type == 'formlist') { 
      const formBlock = Object.keys(this.props.keyData.options).map((key, i) => <div key={i}><input type="radio" value={key} /> <input type="text" value={this.props.keyData.options[key]} /></div> ); 
      inputWrap = ( 
        <div className="radio-group" onChange={this.handleInputFieldChanges.bind(this)}> 
          {formBlock} 
        </div> 
      );
    } else if (this.props.keyData.type == 'radio') { 
      const radioBlock = Object.keys(this.props.keyData.options).map((key, i) => <div key={i}><input checked={this.state.keyValue === key} onChange={this.handleInputFieldChanges.bind(this)} type="radio" value={key} /> {this.props.keyData.options[key]}</div> ); 
      inputWrap = ( 
        <div className="radio-group"> 
          {radioBlock} 
        </div>
      );
    }  

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