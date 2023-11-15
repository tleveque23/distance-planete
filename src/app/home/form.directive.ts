import { Directive, inject, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: 'form',
  standalone: true,
})
export class FormDirective {
  private readonly ngForm = inject(NgForm, {self: true});
  @Output() formValueChange = this.ngForm.form.valueChanges;

  /*constructor() {
    this.ngForm.form.valueChanges.subscribe({
      next: value => {
        console.log('***** value change:  ', value )
      }
    })
  }*/
}
