import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { RoutesNavigation, URLS } from '../../../enums';
import { OptionsDocument } from '../../../constants';
import { obtainDataForm } from '../../../services/obtainDataForm';
import fetcho from '../../../services/fetcho';
import ModalsCustoms from '../../../utility_components/Modals';
import { BaseCardActionComponent } from '../base-card-action/base-card-action.component';

@Component({
  selector: 'customer-info',
  standalone: true,
  imports: [InputComponent, ButtonComponent, BaseCardActionComponent, InputComponent],
  templateUrl: './customer-info.component.html',
  styles: ``,
})
export class CustomerInfoComponent {

  routes = RoutesNavigation;

  @Output() customerAdded: EventEmitter<void> = new EventEmitter<void>();

  optionsDocument = OptionsDocument;

  valorInputs: any = null; //TODO: Hay que tipar este tipo de dato

  responseRegister: any = null; //TODO: Hay que tipar esto pero no se que viene

  handleSubmit = (e: Event) => (this.valorInputs = obtainDataForm(e));

  // async addCustomer(e: Event) {
  //   this.handleSubmit(e);

  //   console.log(this.valorInputs);

  //   const response: any = await fetcho({
  //     url: URLS.URL_ADD_CUSTOMER,
  //     method: 'POST',
  //     body: this.valorInputs,
  //   });

  //   console.log(response);

  //   this.responseRegister = response;
  //   if (!this.responseRegister || 'error' in this.responseRegister) {
  //     ModalsCustoms.error({ text: 'Error in add customer' });
  //   }else{
  //     ModalsCustoms.success({
  //       text: 'Customer added successfully',
  //     });
  //     this.customerAdded.emit();
  //   }
  // }

  addCustomer(e: Event) {
    e.preventDefault()
    this.customerAdded.emit();
  }
}
