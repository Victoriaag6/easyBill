import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartType } from 'chart.js/auto';
@Component({
  selector: 'bars-graphic',
  standalone: true,
  templateUrl: './bars-graphic.component.html',
  styles: ``
})
export class BarsGraphicComponent implements OnInit {
 
    // Atributo que almacena los datos del chart
    public chart: Chart | undefined;
   
    ngOnInit(): void {
      // datos
      const data = {
        labels: ['Pago Movil Banesco', 'Zelle Chase', 'Transferencia Banesco'],
        // legend: ['Pago Movil Banesco', 'Zelle Chase', 'Transferencia Banesco'],
        datasets: [{
            label: 'Money received in the banks',
          data: [65, 59, 80],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)'

          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 0.5
        }]
      };
   
      // Creamos la gráfica
      this.chart = new Chart("chart", {
        type: 'bar' as ChartType, // tipo de la gráfica 
        data: data, // datos 
        options: { // opciones de la gráfica 
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive: true,
        }
      });
   
  }
}