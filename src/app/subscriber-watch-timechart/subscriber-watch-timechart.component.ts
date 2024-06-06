import { ChartData } from 'chart.js';
import { Component } from '@angular/core';
import { NgChartsConfiguration } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'subscriber-watch-timechart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './subscriber-watch-timechart.component.html',
  styleUrl: './subscriber-watch-timechart.component.scss'
})
export class SubscriberWatchTimechartComponent {

  data: ChartData<'bar'> = {
   labels:['jan'],
  datasets:[
    {
      data: [1],
    },
  ],
  };
}
