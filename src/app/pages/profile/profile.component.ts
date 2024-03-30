import { Component, Input } from '@angular/core';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { ItemProfileComponent } from '../../components/item-profile/item-profile.component';
import { mockProfileInfo } from '../../../mocks/profile-info';
import { ProfileType } from '../../../types';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [BaseDashboardComponent, ItemProfileComponent, ButtonComponent],
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {
  dataProfile = mockProfileInfo

  @Input() profileType: ProfileType = 'admin';

  @Input() srcImage = "../../../assets/foto-default.png"
}
