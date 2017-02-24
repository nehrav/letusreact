"use strict";

const dataConstants = {
  menu: {
  	btn: {
	    name: 'Button'
	    , type: 'button'
	  }
	  , chk: {
	    name: 'Checkbox'
	    , type: 'checkbox'
	  }
	  , chkg: {
	    name: 'Checkbox Group'
	    , type: 'checkboxgrp'
	  }
	  , pgh: {
	    name: 'Page Header'
	    , type: 'pghdr'
	  }
	  , rdg: {
	    name: 'Radio Group'
	    , type: 'radio'
	  }
	  , sel: {
	    name: 'Select Box (Dropdown)'
	    , type: 'select'
	  }
	  , inpt: {
	    name: 'Input (Text Field)'
	    , type: 'input'
	  }
	  , txt: {
	    name: 'Text Area'
	    , type: 'textarea'
	  }
  }
  , formType: {
  	btn: ['lbl', 'nam', 'val']
  	, chk: ['lbl', 'nam', 'val']
  	, chkg: ['lbl', 'nam', 'val']
  	, pgh: ['lbl', 'nam', 'val']
  	, rdg: ['lbl', 'nam', 'val']
  	, sel: ['lbl', 'nam', 'val']
  	, inpt: ['lbl', 'nam', 'val']
  	, txt: ['lbl', 'nam', 'val']
  }
};

export default dataConstants;