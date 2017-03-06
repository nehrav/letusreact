import React from 'react'; 
import FormItem from './../form/formItem'; 

export default class CanvasArea extends React.Component {
  constructor() {
    super(); 

    let formObj = {
      pageTitle: ''
      , formItems: {}
    }
    this.state = {
      formObj: formObj 
    };
  }

	changeArray(keyToRemove) { 
    const { canvasFormFields } = this.props; 
    canvasFormFields.splice(canvasFormFields.indexOf(keyToRemove), 1);
    this.props.updateCanvasItems(canvasFormFields);
  }

  createMyForm() {
    console.log(this.state.formObj);
  }

  updateFORMJSON(e, data, keytoupdate) {
    console.log('field Data of canvas area called = ', data, this.state.formObj);
  }

  render() { 
		console.log('canvasArea props = ', this.props, this.props.canvasFormFields.length);
		const { canvasFormFields } = this.props;  
		const { formType } = this.props; 
		const formItemArry = canvasFormFields.map((objkey, i) => <FormItem key={i} objkey={objkey} formobjkey={formType[objkey]} changeArray={this.changeArray.bind(this)} updateFORMJSON={this.updateFORMJSON.bind(this)} /> );

    return (
      <div className="canvasarea">  
        <div><pre>{JSON.stringify(this.state.formObj, null, 2) }</pre> </div>
				<div>{formItemArry}</div>
        <div className={"buttonWrapper "  + (this.props.canvasFormFields.length ? 'showme' : '')}>
          <button onClick={this.createMyForm.bind(this)}>Create My Form</button>
        </div>
			</div>
    );
  }
} 