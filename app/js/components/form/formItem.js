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

  updateState(key, val) {
    this.setState({key:val});
  }

	removeCanvasFormField(key, fieldType) { 
    this.props.changeArray(key);
  } 

  updatePropFormJSON () {
    console.log('updatePropFormJSON called of form ITEM = ', this.state.formFieldObj);
    this.props.updateFORMJSON(this.props.objkey, this.state.formFieldObj);
  }

  collectFormBlockValue(val, keyToUpdate) {
  	let newFormBlockState = this.state.formFieldObj;
  	// console.log('xxxxxxxxx = ', newFormBlockState);
  	if(keyToUpdate == 'label' || keyToUpdate == 'allowType' || keyToUpdate == 'listType' || keyToUpdate == 'callBack' || keyToUpdate == 'action' || keyToUpdate == 'errorCallBack')
  		newFormBlockState['config'][keyToUpdate] = val;
  	else if(keyToUpdate == 'disabled' || keyToUpdate == 'required' || keyToUpdate == 'maxlength')
  		newFormBlockState['config']['constraints'][keyToUpdate] = val;
  	else if(keyToUpdate == 'type' || keyToUpdate == 'name' || keyToUpdate == 'view' || keyToUpdate == 'value')
  		newFormBlockState[keyToUpdate] = val;
  	else {
  		// newFormBlockState = {};
  		newFormBlockState[keyToUpdate] = val;
  	}
    this.updateState('formFieldObj', newFormBlockState); 
    this.updatePropFormJSON();

  	console.log('collectFormBlockValue = ',  keyToUpdate, val, this.state.formFieldObj);
  } 

  componentWillMount() {
    this.updatePropFormJSON();
  }

  render() {
  	const { formobjkey } = this.props;
  	const { objkey } = this.props;
  	const blockHead = DataConstants['menu'][objkey]['name']; 
    this.state.formFieldObj.type = objkey;
    
    if(this.state.formFieldObj.type == 'dropdown')
      this.state.formFieldObj['list'] = [];

  	console.log('FormItem props = ', this.props, this.state); 

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