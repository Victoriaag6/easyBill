import { Component } from '@angular/core';
import { BaseCardActionComponent } from '../base-card-action/base-card-action.component';
import { PaymentMethodSelectComponent } from '../payment-method-select/payment-method-select.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { obtainDataForm } from '../../../services/obtainDataForm';

@Component({
  selector: 'add-payments',
  standalone: true,
  imports: [BaseCardActionComponent, PaymentMethodSelectComponent, InputComponent, ButtonComponent],
  templateUrl: './add-payments.component.html',
  styles: ``
})
export class AddPaymentsComponent {
  valorInputs: any = null //TODO: CAMBIAR ESTO
  
  handleSubmit = (e: Event) => this.valorInputs = obtainDataForm(e);

  enviarLoco = (e: Event) =>{
    this.handleSubmit(e)
    console.log(this.valorInputs)
  }
}
