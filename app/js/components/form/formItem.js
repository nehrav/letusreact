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
  	let newFormBlockState = this.state.formFieldObj;
  	// console.log('xxxxxxxxx = ', newFormBlockState);
  	if(keyToUpdate == 'label' || keyToUpdate == 'allowType' || keyToUpdate == 'listType')
  		newFormBlockState['config'][keyToUpdate] = val;
  	else if(keyToUpdate == 'disabled' || keyToUpdate == 'required' || keyToUpdate == 'maxlength')
  		newFormBlockState['config']['constraints'][keyToUpdate] = val;
  	else if(keyToUpdate == 'type' || keyToUpdate == 'view' || keyToUpdate == 'value')
  		newFormBlockState[keyToUpdate] = val;
  	else {
  		newFormBlockState = {};
  		newFormBlockState[keyToUpdate] = val;
  	}
  	this.setState({formFieldObj:newFormBlockState});

  	console.log('collectFormBlockValue = ',  val, keyToUpdate, this.state);
  }

  render() {
  	const { formobjkey } = this.props;
  	const { objkey } = this.props;
  	const blockHead = DataConstants['menu'][objkey]['name']; 
  	console.log('FormItem = ', formobjkey, this.props, ); 

  	const formRowBlock = formobjkey.map((fieldArrKey, i) => <FormBlock collectFormRowValue={this.collectFormBlockValue.bind(this)} key={i} keyName={fieldArrKey} keyData={DataConstants.keyMap[fieldArrKey]} /> ); 
  	
    return ( 
      <div className="block">
      	<h3>{blockHead}</h3>
      	<i className="icon cross" onClick={this.removeCanvasFormField.bind(this, objkey)}>x</i>
        {formRowBlock}
      </div> 
    );
  }
}