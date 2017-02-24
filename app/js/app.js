import React from "react"; 

import Header from "./components/layout/header"; 
import Nav from "./components/layout/nav";
import NavItem from "./components/layout/navItem";

import DataConstants from './data/constants';

export default class App extends React.Component {
  render() {   
    return (
      <div> 
        <Header /> 
        <div className="wrapper">
        	<p>
        		Click on any of the <strong>"form items"</strong> from right to create your form.
        	</p>
        	<div className="canvasarea"> 
        		<p>Canvas Area</p>
        	</div>
        	<Nav menu={DataConstants.menu} />
        </div> 
      </div> 
    );
  }
} 