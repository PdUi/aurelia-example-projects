import {bindable, customAttribute, DOM, inject} from 'aurelia-framework';
import 'jquery';
import 'select2';

@customAttribute('select2')
@inject(DOM.Element)
export class Select2CustomAttribute {
  @bindable public value: any;

  constructor(private element) {
  }

  public attached() {
     $(this.element).select2(this.value).on('change', evt => {
         console.log(this.value);
    });
  }

  public detached() {
    $(this.element).select2('destroy');
  }
}
