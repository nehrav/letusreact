import React from 'react'; 
import FormItem from './../form/formItem'; 

export default class CanvasArea extends React.Component {
  render() { 
		const { canvasFormFields } = this.props;  
		const { formType } = this.props; 
		console.log('canvasArea = ', this.props, canvasFormFields, formType);
		const formItemArry = canvasFormFields.map((objkey, i) => <FormItem key={i} objkey={objkey} formobjkey={formType[objkey]} /> );

    return (
      <div className="canvasarea">  
				<div>{formItemArry}</div>
			</div>
    );
  }
} 