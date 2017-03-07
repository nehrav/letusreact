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
      formObj: formObj,
      refKeys :[]
    };
  }

  
  changeArray(keyToRemove) { 
    const { canvasFormFields } = this.props; 
    canvasFormFields.splice(canvasFormFields.indexOf(keyToRemove), 1);
    this.props.updateCanvasItems(canvasFormFields);
  }

  removeKeyFromJSON(keyToRemove){
    const formJSON  = this.state.formObj;
    delete formJSON.formItems[keyToRemove];
    this.setState({'formObj':formJSON});
  }
 

  createMyForm(e) {
    $.post("http://localhost/letusreact/api/form_creator.php", {
        name: 'Form',
        formjson: this.state.formObj
      },
      function(res){
        if(res == 'true')
          alert('Form Data has been saved to DB!!');
      }.bind(this)
    );
    console.log(this.state.formObj);
    e.preventDefault();
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
      if(data['refKey']) {
        formObj['formItems'][data['refKey']] = data;
        // delete formObj['formItems'][data['refKey']]['name'];
      } 
    }
    console.log('field Data of canvas area called = ', key, data, formObj);

    this.setState({formObj:formObj});
  }

  render() { 
		// console.log('canvasArea props = ', this.props);
		const { canvasFormFields } = this.props;  
		const { formType } = this.props; 
		const formItemArry = canvasFormFields.map((objkey, i) => <FormItem key={i} objkey={objkey} formobjkey={formType[objkey]} changeArray={this.changeArray.bind(this)} updateFORMJSON={this.updateFORMJSON.bind(this)} removeKeyFromJSON={this.removeKeyFromJSON.bind(this)} /> );




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