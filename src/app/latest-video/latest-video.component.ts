import { Component } from '@angular/core';
import { TextLimitPipe } from '../text-limit.pipe';

@Component({
  selector: 'latest-video',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './latest-video.component.html',
  styleUrl: './latest-video.component.scss'
})
export class LatestVideoComponent {
  data  = {
    videoTitle: 'Full Stack Angular 17+ .NET 8 Library Management and with the api in >wnte',
    ranking: '2',
    clickThrough: 10,
    duration: 322,
    views: 100,
    comments: 18,
    Likes: 50
    }
}
