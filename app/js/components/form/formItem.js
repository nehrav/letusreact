import React from "react";
import FormBlock from './formBlock'; 
 
export default class FormItem extends React.Component {
	removeCanvasFormField(e, fieldType) {
    console.log(e, fieldType);
  }

  render() {
  	const { formobjkey } = this.props;
  	const { objkey } = this.props;
  	
  	const formRowBlock = formobjkey.map((fieldArrKey, i) => <FormBlock key={i} formobjkey={fieldArrKey} /> ); 
  	console.log('FormItem = ', formobjkey, this.props);
    return ( 
      <div className="block">
      	<i className="icon cross" onClick={this.removeCanvasFormField.bind(this, objkey)}></i>
        {formRowBlock}
      </div> 
    );
  }
}