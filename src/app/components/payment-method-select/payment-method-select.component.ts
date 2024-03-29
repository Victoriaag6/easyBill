import { Component, Input } from '@angular/core';
import { addPaymentsMocks } from '../../../mocks/add-payments';
import { PaymentsInterface } from '../../../types';

@Component({
  selector: 'payment-method-select',
  standalone: true,
  imports: [],
  templateUrl: './payment-method-select.component.html',
  styles: ``
})
export class PaymentMethodSelectComponent {
 @Input() id = 'payment-select';
 paymentsMethods = addPaymentsMocks

 actualPayment: PaymentsInterface | undefined = this.paymentsMethods[0] 

 updatePayment = (e: Event) => {
  const newValue = (e.target as HTMLSelectElement).value

  this.actualPayment = this.paymentsMethods.find(payment => payment.titlePayment === newValue)
 }

}
