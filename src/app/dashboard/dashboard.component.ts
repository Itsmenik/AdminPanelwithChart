import { Component } from '@angular/core';
import { LatestCommentComponent } from '../latest-comment/latest-comment.component';
import { LatestVideoComponent } from '../latest-video/latest-video.component';
import { SubscriberWatchTimechartComponent } from '../subscriber-watch-timechart/subscriber-watch-timechart.component';
import { VeiwsandRevenueChartComponent } from '../veiwsand-revenue-chart/veiwsand-revenue-chart.component';
import { PublishVideoComponent } from '../publish-video/publish-video.component';
import { AudeienceChartComponent } from '../audeience-chart/audeience-chart.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [LatestCommentComponent,LatestVideoComponent,AudeienceChartComponent,SubscriberWatchTimechartComponent,VeiwsandRevenueChartComponent,PublishVideoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
