"use strict";

const dataConstants = {
  menu: {
  	button: {
	    name: 'Button'
	    , type: 'button'
	  }
	  , checkbox: {
	    name: 'Checkbox'
	    , type: 'checkbox'
	  }
	  , checkboxgroup: {
	    name: 'Checkbox Group'
	    , type: 'checkboxgroup'
	  }
	  , pageheader: {
	    name: 'Page Header'
	    , type: 'pageheader'
	  }
	  , radiogroup: {
	    name: 'Radio Group'
	    , type: 'radiogroup'
	  }
	  , selectbox: {
	    name: 'Select Box (Dropdown)'
	    , type: 'selectbox'
	  }
	  , inputtext: {
	    name: 'Input (Text Field)'
	    , type: 'inputtext'
	  }
	  , textarea: {
	    name: 'Text Area'
	    , type: 'textarea'
	  }
  }
  , keyMap: {
  	lbl: {
  		name: 'Label :'
  	}
  	, nam: {
  		name: 'Name :'
  	}
  	, val: {
  		name: 'Value :'
  	}
  	, req: {
  		name: 'Required'
  		, type: 'chkbox'
  	}
  	, dsbl: {
  		name: 'Disabled'
  		, type: 'chkbox'
  	}
  }
  , formType: {
  	button: ['lbl', 'nam', 'dsbl']
  	, checkbox: ['lbl', 'nam', 'val', 'req']
  	, checkboxgroup: ['lbl', 'nam', 'val']
  	, pageheader: ['lbl', 'nam', 'val']
  	, radiogroup: ['lbl', 'nam', 'val']
  	, selectbox: ['lbl', 'nam', 'val']
  	, inputtext: ['lbl', 'nam', 'val']
  	, textarea: ['lbl', 'nam', 'val']
  }
};

export default dataConstants;