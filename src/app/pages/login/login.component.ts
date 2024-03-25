import { Component, OnInit } from '@angular/core';
import { EasyLogoComponent } from '../../components/easy-logo/easy-logo.component';
import { InputComponent } from '../../components/input/input.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation } from '../../../enums';
import fetcho from "../../../services/fetcho"
import { URLS } from '../../../enums';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EasyLogoComponent, InputComponent, RouterModule, ButtonComponent],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit{
  routes = RoutesNavigation
  info: Array<any> = [] //<-- Declarar interfaz para tipar la respuesta

  ngOnInit(): void {
    this.obtainAll() //<-- Llamar a la función para obtener la información
  }

  obtainAll = async() =>{
    const data = await fetcho({url: URLS.URL_DATA, method: 'GET'})
    
    if(data){
      this.info = data?.results
    }
  }
}
