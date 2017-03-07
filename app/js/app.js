import React from "react"; 

import DataConstants from './data/constants';

import Header from "./components/layout/header"; 
import CanvasArea from "./components/layout/canvasArea";
import Nav from "./components/layout/nav"; 

export default class App extends React.Component {
	constructor() {
    super();

    this.state = {
      canvasItems:[]
    };
  } 

  updateCanvasItems(arry) {
    this.setState({canvasItems:arry});
  }

  render() {   

    return (
      <div> 
        <Header /> 
        <div className="wrapper">
        	<p>
        		Click on any of the <strong>"form items"</strong> from right to create your form.
        	</p>
        	<CanvasArea updateCanvasItems={this.updateCanvasItems.bind(this)} canvasFormFields={this.state.canvasItems} formType={DataConstants.formType} />
        	<Nav updateCanvasItems={this.updateCanvasItems.bind(this)} canvasFormFields={this.state.canvasItems} menu={DataConstants.menu} />
        </div> 
      </div> 
    );
  }
} 