import React from "react"; 

import DataConstants from './data/constants';

import Header from "./components/layout/header"; 
import CanvasArea from "./components/layout/canvasArea";
import Nav from "./components/layout/nav"; 

export default class App extends React.Component {
	constructor() {
    super();
    this.state = {
      canvasItems:['dropdown'],
      // canvasItems:[]
    };
  }

  updateCanvasItems(item) {
  	const updatedItems = this.state.canvasItems;
  	updatedItems.push(item);
  	console.log(item, updatedItems, this.state.canvasItems);
    this.setState({canvasItems:updatedItems});
  }

  render() {   
    return (
      <div> 
        <Header /> 
        <div className="wrapper">
        	<p>
        		Click on any of the <strong>"form items"</strong> from right to create your form.
        	</p>
        	<CanvasArea canvasFormFields={this.state.canvasItems} formType={DataConstants.formType} /> 
        	<Nav menu={DataConstants.menu} />
        </div> 
      </div> 
    );
  }
} 