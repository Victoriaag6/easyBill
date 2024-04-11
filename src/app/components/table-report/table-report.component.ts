import { Component, Input } from "@angular/core";
import { ItemReport } from "../../../types";
import { ItemReportComponent } from "../item-report/item-report.component";
import { reports_info } from "../../../mocks/reports-info";
import { CommonModule } from '@angular/common';
@Component({
  selector: "table-report",
  standalone: true,
  imports: [ItemReportComponent, CommonModule],
  templateUrl: "./table-report.component.html",
  styles: ``
})

export class TableReportComponent {
  @Input() reports_info: Array<ItemReport> = reports_info;
}