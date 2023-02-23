// Add any types here that you need for local development only.
// These will *not* be published as part of your addon, so be careful that your published code does not rely on them!

import '@glint/environment-ember-loose';

import type CheckboxConrolComponent from '../src/components/form/controls/checkbox';
import type TextareaControlComponent from '../src/components/form/controls/textarea';
import type FieldComponent from '../src/components/form/field';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry /* extends EmberPageTitle, etc, other addon registries */ {
    // local entries
    'Form::Field': typeof FieldComponent;
    'Form::Controls::Checkbox': typeof CheckboxConrolComponent;
    'Form::Controls::Textarea': typeof TextareaControlComponent;
  }
}
