import React from "react"; 

export default class OptionGroupSet extends React.Component {
	addOptions() {
    console.log(this.props);
    this.props.addOptions();   
  } 

	updateField(type, index, e) {
		console.log('updateField', e, index, type);
    this.props.updateField(e.target.value, index, type);   
	}

  render() { 
    const {options} = this.props;
  	console.log('OptionGroupSet | render | ', options);
    const optionBlock = options.map((obj, i) => <div key={i} className="option-group">
      <div><input type="text" value={obj.id} placeholder="Label" onChange={this.updateField.bind(this, i, 'id')} /></div>
      <div><input type="text" value={obj.label} placeholder="Value" onChange={this.updateField.bind(this, i, 'label')} /></div> </div> );

    return (
    	<div>
    		{optionBlock}
    		<button onClick={this.addOptions.bind(this)}>Add options </button> 
    	</div> 
    );
  }
}  

// 