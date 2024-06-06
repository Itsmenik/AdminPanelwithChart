import { Component } from '@angular/core';
import { TextLimitPipe } from '../text-limit.pipe';

@Component({
  selector: 'publish-video',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './publish-video.component.html',
  styleUrl: './publish-video.component.scss'
})
export class PublishVideoComponent {
    data = [
      {
         videTitle:"Video on the Stock Market",
         ranking: '2',
         clickThrough: 10,
         duration: 322,
         views: 100,
         comments: 18,
         Likes: 50,
         imageSrc:"publishthumnail.jpg"
      },
      {
        videTitle:"Vidoe on Docker Erro",
        ranking: '2',
        clickThrough: 10,
        duration: 322,
        views: 100,
        comments: 18,
        Likes: 50,
        imageSrc:"Thumbnail.png"
     },
     {
      videTitle:"Video on the Mongodb Error",
      ranking: '2',
      clickThrough: 10,
      duration: 322,
      views: 100,
      comments: 18,
      Likes: 50,
      imageSrc:"Thumbnail.png"
   },
   {
    videTitle:"Video on the React",
    ranking: '2',
    clickThrough: 10,
    duration: 322,
    views: 100,
    comments: 18,
    Likes: 50,
    imageSrc:"Thumbnail.png"
 },
    ]
}
