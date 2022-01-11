import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
// importing rules

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
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

    // //registering rules

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('passwords_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short`,
          alphaSpaces: `The field ${ctx.field} may only include alphabetical characters and spaces`,
          email: `The field ${ctx.field} must contain a valid email address`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `you are not allowed to use this value for this ${ctx.field}.`,
          country_excluded:
            'Due to restrictions, we do not allow users from this location',
          passwords_mismatch: 'The passwords do not match.',
          tos: 'You must accept the Terms of Service',
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid `;
        return message;
      },
      // validation triggers
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
