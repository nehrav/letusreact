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
  	label: {
  		name: 'Label :'
  	}
    , pageTitle: {
      name: 'Page Title :'
    }
  	, name: {
  		name: 'Name :'
  	}
  	, value: {
  		name: 'Default Value :'
  	}
  	, required: {
  		name: 'Required'
  		, type: 'checkbox'
  	}
  	, disabled: {
  		name: 'Disabled'
  		, type: 'checkbox'
  	}
    , options: {
      name: 'Options :'
      , type: 'formlist'
      , options: {
        option1:'Option 1'
        , option2:'Option 2'
        , option3:'Option 3'
      }
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
  	, maxlength: {
  		name: 'Maxlength :'
  	}
  	, view: {
  		name: 'View Type :'
  		, type: 'radio'
  		, options: {
  			inline: 'Inline'
  			, full: 'Full'
  		}
  	}
    , listType: {
      name: 'Dropdown Type :'
      , type: 'radio'
      , options: {
        single: 'Single Select'
        , multi: 'Multi Select'
      }
    }
    , allowType: {
      name: 'Allow Type :'
      , type: 'radio'
      , options: {
        decimal: 'Decimal'
        , number: 'Number'
      }
    }
  }
  , formType: {
  	button: ['label', 'name', 'type', 'view', 'disabled']
  	, checkbox: ['label', 'name', 'value', 'required', 'disabled']
  	, checkboxgroup: ['label', 'name', 'value']
  	, pageheader: ['pageTitle']
  	, radiogroup: ['label', 'name', 'value', 'required']
  	, dropdown: ['label', 'name', 'value', 'options', 'listType', 'view', 'required', 'disabled']
  	, inputtext: ['label', 'name', 'value', 'allowType', 'maxlength', 'required', 'disabled']
  	, textarea: ['label', 'name', 'value', 'required']
  }
};

export default dataConstants;