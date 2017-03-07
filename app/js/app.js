import React from "react"; 

import DataConstants from './data/constants';

import Header from "./components/layout/header"; 
import CanvasArea from "./components/layout/canvasArea";
import Nav from "./components/layout/nav"; 

export default class App extends React.Component {
	constructor() {
    super();
    const defaultObj = {
      "pageTitle" : "Payment Plan",
      "dataKey" : "formObj",
      "formItems" :{} 
    };

    this.state = {
      canvasItems:[],
      formJson:defaultObj
    };
  } 

  updateCanvasItems(arry) {
    this.setState({canvasItems:arry});
  }

  createJSON(key,val){
    let newJSON = this.state.formJson;
    newJSON['formItems'][key] = val;
    this.setState({formJson:newJSON});
  }

  render() {   
    console.log(2, this.props.children);
    React.Children.forEach(this.props.children, function(child){
       console.log('Surbhi',child);
     });

    return (
      <div> 
        <Header /> 
        <div className="wrapper">
        	<p>
        		Click on any of the <strong>"form items"</strong> from right to create your form.
        	</p>
        	<CanvasArea updateCanvasItems={this.updateCanvasItems.bind(this)} canvasFormFields={this.state.canvasItems} formType={DataConstants.formType} formJson={this.state.formJson} > <div>11</div> </CanvasArea>
        	<Nav updateCanvasItems={this.updateCanvasItems.bind(this)} canvasFormFields={this.state.canvasItems} menu={DataConstants.menu} />
        </div> 
      </div> 
    );
  }
} 