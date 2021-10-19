import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
} from '@vee-validate/rules';

/*
min rule checks if input is less than a specific length of characters
max rule checks if input is greater than a specific length of characters
alpha_spaces - limit input to alphabetic characters and spaces
alphaSpaces is assigned as an alias
*/
export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
  },
};
