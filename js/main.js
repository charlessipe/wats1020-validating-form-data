/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.


$(document).on('ready', function(){  // create a document ready handler
  
  
  $('#order-form').validate({  // define a validation object
    submitHandler : function(form) {  // connect validation object to the event handler
      form.submit();
    },
    
    rules: {
      "your-name": {
        required: true,
        maxlength: 128,
        lettersonly: true  //test
      },
      "your-address": {
        required: true
      },
      "your-city": {
        required: true
      },
      "your-state": {
        required: true,
        maxlength: 2,
        minlength: 2
      },
      "your-zip": {
        required: true,
        minlength: 5,
        maxlength: 5,
        digits: true
      },
      "card-holder-name": {
        required: true,
        maxlength: 128,
        lettersonly: true
      },
      "card-number": {
        required: true,
        creditcard: true
      },
      "expiry-month": {
        required: true
      },
      "expiry-year": {
        required: true
      },
      "cvv": {
        required: true,
        digits: true,
        maxlength: 3,
        minlength: 3
      },
      "shipping-method": {
        required: true
      },
      "comments": {
        required: false,
        maxlength: 500
      }
    } // end of rules object
  });  // end of validate method
});