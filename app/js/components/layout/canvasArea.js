import React from 'react'; 
import FormItem from './../form/formItem'; 

export default class CanvasArea extends React.Component {

  constructor() {
    super(); 

    let formObj = {
      pageTitle: ''
      , dataKey: 'formObj'
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
 
  createJSON(key,val){
    let newJSON = this.state.formJson;
    newJSON['formItems'][key] = val;
    this.setState({formJson:newJSON});
  }

  saveForm(){
              
  }

  createMyForm() {
    console.log(this.state.formObj);
  }

  updateFORMJSON(key, data) {
    const { formObj } = this.state;
    if(key == 'pageheader') {
      formObj.pageTitle = data['pageTitle'];
    } else if(key == 'loadrequest') {
      formObj.loadrequest = {
        action: data.config.action
        , callback: data.config.callBack
        , error: {
          callback:data.config.errorCallBack
        }
      }
    } else {
      if(data['name']) {
        formObj['formItems'][data['name']] = data;
        delete formObj['formItems'][data['name']]['name'];
      } 
    }
    console.log('field Data of canvas area called = ', key, data, formObj);

    this.setState({formObj:formObj});
  }

  render() { 
		console.log('canvasArea props = ', this.props);
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