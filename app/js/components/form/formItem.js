import React from "react";
import FormBlock from './formBlock'; 

import DataConstants from './../../data/constants';
 
export default class FormItem extends React.Component {
	constructor() {
    super();

    const defaultObj = {
    	type:''
    	, config: {
    		label: ''
    		, constraints: {}
    	}
    }

    this.state = {
      formFieldObj: defaultObj
    };
  }

	removeCanvasFormField(e, fieldType) {
    console.log(e, fieldType);
  }

  collectFormBlockValue(val, keyToUpdate) {
  	const newFormBlockState = this.state.formFieldObj;
  	// console.log('xxxxxxxxx = ', newFormBlockState);
  	if(keyToUpdate == 'lbl')
  		newFormBlockState['config']['label'] = val;
  	else if(keyToUpdate == 'dsbl')
  		newFormBlockState['config']['constraints']['disabled'] = val;
  	else if(keyToUpdate == 'req')
  		newFormBlockState['config']['constraints']['required'] = val;
  	this.setState({formFieldObj:newFormBlockState});
  	console.log('collectFormBlockValue = ',  val, keyToUpdate, this.state.formFieldObj);
  }

  render() {
  	const { formobjkey } = this.props;
  	const { objkey } = this.props;
  	let keyValue = objkey + '-' + new Date().getTime();
  	console.log('FormItem = ', formobjkey, this.props, DataConstants.keyMap); 

  	const formRowBlock = formobjkey.map((fieldArrKey, i) => <FormBlock collectFormRowValue={this.collectFormBlockValue.bind(this)} key={i} keyName={fieldArrKey} keyData={DataConstants.keyMap[fieldArrKey]} keyValue={(fieldArrKey == 'nam') ? keyValue : ''} /> ); 
  	
    return ( 
      <div className="block">
      	<i className="icon cross" onClick={this.removeCanvasFormField.bind(this, objkey)}></i>
        {formRowBlock}
      </div> 
    );
  }
}