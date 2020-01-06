import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {

 // Doughnut
 @Input() ChartLabels: Label[] = [];
 @Input() ChartData: MultiDataSet = [];
 @Input() ChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}
