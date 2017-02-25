import React from 'react'; 
import FormItem from './../form/formItem'; 

export default class CanvasArea extends React.Component {
	changeArray(keyToRemove) { 
    const { canvasFormFields } = this.props; 
    canvasFormFields.splice(canvasFormFields.indexOf(keyToRemove), 1);
    this.props.updateCanvasItems(canvasFormFields);
  }

  render() { 
		console.log('canvasArea props = ', this.props);
		const { canvasFormFields } = this.props;  
		const { formType } = this.props; 
		const formItemArry = canvasFormFields.map((objkey, i) => <FormItem key={i} objkey={objkey} formobjkey={formType[objkey]} changeArray={this.changeArray.bind(this)} /> );

    return (
      <div className="canvasarea">  
				<div>{formItemArry}</div>
			</div>
    );
  }
} 