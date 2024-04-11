import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { ItemProfileComponent } from '../../components/item-profile/item-profile.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TableReportComponent } from '../../components/table-report/table-report.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';
import { BarsGraphicComponent } from '../../components/bars-graphic/bars-graphic.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ ItemProfileComponent, ButtonComponent, TableReportComponent, BaseDashboardComponent, CardInfoComponent, BarsGraphicComponent],
  templateUrl: './reports.component.html',
  styles: ``
})
export class reportsComponent {

}
