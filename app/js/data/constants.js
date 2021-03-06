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
    , loadrequest: {
      name: 'Page Load Event'
      , type: 'loadrequest'
    }
	  , radiogroup: {
	    name: 'Radio Group'
	    , type: 'radiogroup'
	  }
	  , dropdown: {
	    name: 'Select Box (Dropdown)'
	    , type: 'dropdown'
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
  	action: {
      name: 'API / Action URL :'
    }
    , allowType: {
      name: 'Allow Type :'
      , type: 'radio'
      , options: {
        decimal: 'Decimal'
        , number: 'Number'
      }
    }
    , callBack: {
      name: 'Callback Action :'
    }
    , disabled: {
      name: 'Disabled'
      , type: 'checkbox'
    }
    , errorCallBack: {
      name: 'Error Callback :'
    }
    , label: {
      name: 'Label :'
    }
    , listType: {
      name: 'Dropdown Type :'
      , type: 'radio'
      , options: {
        single: 'Single Select'
        , multi: 'Multi Select'
      }
    } 
    , maxlength: {
      name: 'Maxlength :'
    }
  	, name: {
  		name: 'Name :'
  	}  
    , list: {
      name: 'Options :'
      , type: 'formlist'
      , options: [
        { id:'option1', label:'Option 1'}
        , {id:'option2', label:'Option 2'}
      ]
    }
    , pageTitle: {
      name: 'Page Title :'
    } 
    , required: {
      name: 'Required'
      , type: 'checkbox'
    } 
  	, type: {
  		name: 'Type :'
  		, type: 'dropdown'
  		, options: {
  			add:'Add'
  			, delete:'Delete'
  			, submit:'Submit'
  		}
  	} 
    , value: {
      name: 'Default Value :'
    } 
  	, view: {
  		name: 'View Type :'
  		, type: 'radio'
  		, options: {
  			inline: 'Inline'
  			, full: 'Full'
  		}
  	} 
  }
  , formType: {
  	button: ['label', 'name', 'type', 'callBack', 'view', 'disabled']
  	, checkbox: ['label', 'name', 'value', 'required', 'disabled']
  	, checkboxgroup: ['label', 'name', 'value', 'list']
    , loadrequest: ['action', 'callBack', 'errorCallBack']
  	, pageheader: ['pageTitle']
  	, radiogroup: ['label', 'name', 'value', 'list', 'required']
  	, dropdown: ['label', 'name', 'value', 'callBack', 'list', 'listType', 'view', 'required', 'disabled']
  	, inputtext: ['label', 'name', 'value', 'allowType', 'maxlength', 'required', 'disabled']
  	, textarea: ['label', 'name', 'value', 'required']
  }
};

export default dataConstants;