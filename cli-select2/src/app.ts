export class App {
  selectOptions = { allowClear: true, placeholder: 'Select' };
  selectedValue: string = '';
  singleSelectValues: string[] = ['a', 'b', 'c'];
  selectedValues: string[] = [];
  multipleSelectValues: string[] = ['z', 'y', 'x'];

  changeValue() {
    this.selectedValue = this.singleSelectValues[2];
  }
}
