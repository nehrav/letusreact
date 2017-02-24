import React from 'react'; 
import FormItem from './../form/formItem'; 

export default class CanvasArea extends React.Component {
  render() { 
		const { canvasFormFields } = this.props;  
		const { formType } = this.props; 
		console.log('canvasArea = ', this.props, canvasFormFields, formType);
		const formItemArry = canvasFormFields.map((objkey, i) => <FormItem key={i} objkey={objkey} formobjkey={formType[objkey]} /> );
		// const formItemArry = 'aaa';
		// const formItemArry = canvasFormFields.map((objkey, i) => objkey );
    return (
      <div className="canvasarea"> 
				<p>Canvas Area = {canvasFormFields}</p> 
				<div>{formItemArry}</div>
			</div>
    );
  }
} 